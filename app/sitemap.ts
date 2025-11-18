import { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prateeksingh.in";
  
  // Get all case studies for dynamic routes
  const caseStudies = getAllCaseStudies();
  
  // Generate case study URLs
  const caseStudyUrls = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudyUrls,
  ];
}

