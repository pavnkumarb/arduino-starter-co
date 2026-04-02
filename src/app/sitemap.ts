import { MetadataRoute } from "next";
import { TUTORIALS } from "@/lib/tutorials";

const BASE_URL = "https://arduinostarterco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const tutorialPages: MetadataRoute.Sitemap = TUTORIALS.flatMap((tutorial) =>
    tutorial.steps.map((step) => ({
      url: `${BASE_URL}/learn/${tutorial.slug}/${step.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...tutorialPages];
}
