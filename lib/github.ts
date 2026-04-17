// Server-side: pulls recent public GitHub activity at build time.
// Called from ActivityFeed (a server component). Fails gracefully and returns
// [] so the UI can fall back to the curated feed.

const USER = "CraigO5";

export type GitHubActivity = {
  id: string;
  kind: "push" | "create" | "release" | "pr" | "fork" | "star" | "other";
  title: string;
  description: string;
  repo: string;
  href: string;
  date: string; // ISO
  display: string; // "Dec 12" or "Dec 2025"
};

type RawEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    ref?: string;
    ref_type?: string;
    commits?: { sha: string; message: string }[];
    release?: { name?: string; tag_name?: string; html_url?: string };
    pull_request?: { title?: string; html_url?: string; merged?: boolean };
    action?: string;
  };
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const sameYear = d.getFullYear() === now.getFullYear();
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(sameYear ? {} : { year: "numeric" }),
  });
}

function repoHref(repo: string) {
  return `https://github.com/${repo}`;
}

function shorten(text: string, max = 140): string {
  const line = text.split("\n")[0].trim();
  return line.length > max ? `${line.slice(0, max - 1)}…` : line;
}

function mapEvent(e: RawEvent): GitHubActivity | null {
  const base = {
    id: e.id,
    repo: e.repo.name,
    date: e.created_at,
    display: formatDate(e.created_at),
  };

  switch (e.type) {
    case "PushEvent": {
      const commits = e.payload.commits ?? [];
      if (commits.length === 0) return null;
      const msg = shorten(commits[commits.length - 1].message);
      const branch = e.payload.ref?.replace("refs/heads/", "") ?? "";
      return {
        ...base,
        kind: "push",
        title: msg,
        description: `${commits.length} commit${commits.length === 1 ? "" : "s"} to ${e.repo.name}${branch ? ` · ${branch}` : ""}`,
        href: repoHref(e.repo.name),
      };
    }
    case "CreateEvent": {
      if (e.payload.ref_type !== "repository" && e.payload.ref_type !== "branch") {
        return null;
      }
      return {
        ...base,
        kind: "create",
        title:
          e.payload.ref_type === "repository"
            ? `Created repo ${e.repo.name}`
            : `New branch ${e.payload.ref ?? ""} on ${e.repo.name}`,
        description: "",
        href: repoHref(e.repo.name),
      };
    }
    case "ReleaseEvent": {
      const r = e.payload.release;
      return {
        ...base,
        kind: "release",
        title: `Released ${r?.name || r?.tag_name || "a new version"}`,
        description: e.repo.name,
        href: r?.html_url ?? repoHref(e.repo.name),
      };
    }
    case "PullRequestEvent": {
      const pr = e.payload.pull_request;
      if (!pr || (e.payload.action !== "opened" && e.payload.action !== "closed")) {
        return null;
      }
      const verb = pr.merged ? "Merged" : e.payload.action === "opened" ? "Opened" : "Closed";
      return {
        ...base,
        kind: "pr",
        title: `${verb} PR · ${shorten(pr.title ?? "")}`,
        description: e.repo.name,
        href: pr.html_url ?? repoHref(e.repo.name),
      };
    }
    case "ForkEvent":
      return {
        ...base,
        kind: "fork",
        title: `Forked ${e.repo.name}`,
        description: "",
        href: repoHref(e.repo.name),
      };
    case "WatchEvent":
      return {
        ...base,
        kind: "star",
        title: `Starred ${e.repo.name}`,
        description: "",
        href: repoHref(e.repo.name),
      };
    default:
      return null;
  }
}

// Collapse consecutive push events to the same repo in the same day.
function dedupe(items: GitHubActivity[]): GitHubActivity[] {
  const out: GitHubActivity[] = [];
  for (const item of items) {
    const last = out[out.length - 1];
    if (
      last &&
      last.kind === "push" &&
      item.kind === "push" &&
      last.repo === item.repo &&
      last.display === item.display
    ) {
      continue;
    }
    out.push(item);
  }
  return out;
}

export async function fetchGitHubActivity(): Promise<GitHubActivity[]> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "craigsite-build",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${USER}/events/public?per_page=40`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];

    const raw = (await res.json()) as RawEvent[];
    const mapped = raw
      .map(mapEvent)
      .filter((x): x is GitHubActivity => x !== null);
    return dedupe(mapped);
  } catch {
    return [];
  }
}

export const kindLabel: Record<GitHubActivity["kind"], string> = {
  push: "Push",
  create: "Created",
  release: "Release",
  pr: "PR",
  fork: "Fork",
  star: "Star",
  other: "Activity",
};

export const kindTone: Record<GitHubActivity["kind"], string> = {
  push: "bg-accent/15 text-accent",
  create: "bg-emerald-500/15 text-emerald-300",
  release: "bg-warm/15 text-warm",
  pr: "bg-purple-400/15 text-purple-300",
  fork: "bg-sky-400/15 text-sky-300",
  star: "bg-yellow-400/15 text-yellow-300",
  other: "bg-white/10 text-white/70",
};
