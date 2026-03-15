import { getAllPosts } from "@/lib";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const blogPosts = getAllPosts().map((post) => ({
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: new Date(post.date),
    url: `${baseUrl}/blog/${post.slug}`,
  }));

  return [
    {
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: baseUrl,
    },
    {
      priority: 0.8,
      lastModified: new Date(),
      changeFrequency: "weekly",
      url: `${baseUrl}/blog`,
    },
    ...blogPosts,
  ];
}
