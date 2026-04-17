import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://craigo.live";
  const now = new Date();

  const staticRoutes = [
    "",
    "/work",
    "/profile",
    "/achievements",
    "/ask",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const workRoutes = caseStudies.map((cs) => ({
    url: `${base}/work/${cs.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...workRoutes];
}
