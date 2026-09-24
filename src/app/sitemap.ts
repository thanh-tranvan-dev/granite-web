import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services, stones, projects, articles } from "@/data/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const roots = [
    "",
    "dich-vu",
    "cac-loai-da",
    "cong-trinh",
    "bao-gia",
    "lien-he",
    "gioi-thieu",
    "kien-thuc",
  ];
  return [
    ...roots.map((x) => ({
      url: `${site.domain}/${x}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: x === "" ? 1 : 0.7,
    })),
    ...services.map((x) => ({
      url: `${site.domain}/dich-vu/${x.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...stones.map((x) => ({
      url: `${site.domain}/cac-loai-da/${x.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((x) => ({
      url: `${site.domain}/cong-trinh/${x.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...articles.map((x) => ({
      url: `${site.domain}/kien-thuc/${x.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
