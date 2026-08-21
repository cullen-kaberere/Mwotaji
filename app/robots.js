export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://mwotajiofficial.vercel.app/sitemap.xml",
  }
}