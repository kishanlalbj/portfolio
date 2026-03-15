import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kishanlalbj.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
