export default function sitemap() {
  return [
    {
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    },
  ];
}
