import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/sitemap";

const BASE_URL = "https://www.beautysecretsstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : ("monthly" as const),
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
