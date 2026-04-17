import type { NextConfig } from "next";
import { execSync } from "node:child_process";

const isProd = process.env.NODE_ENV === "production";
const repoName = "craigsite-v2";

// Best-effort git metadata resolved at build time. Falls back to "dev" when
// outside a git checkout (e.g., tarball builds).
function gitInfo() {
  try {
    const sha = execSync("git rev-parse --short HEAD").toString().trim();
    return { sha };
  } catch {
    return { sha: "dev" };
  }
}

const { sha } = gitInfo();

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BUILD_SHA: sha,
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
