export default function sitemap() {
  const baseUrl = "https://shraddha-setu.vercel.app/"; // change this

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hanuman-chalisa`,
      lastModified: new Date(),
    },
  ];
}