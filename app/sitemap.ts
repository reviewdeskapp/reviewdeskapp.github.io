import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://reviewdeskapp.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/privacy/", "/support/"].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.5,
  }));
}
