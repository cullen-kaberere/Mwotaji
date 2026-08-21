import Header from "@/components/Header"
import ProductGrid from "@/components/ProductGrid"
import { products } from "@/lib/products"

export const metadata = {
  title: "Shop Collection | Mwotaji Official",
  description:
    "Explore the full Mwotaji collection: The Dreamers Essential tees, hoodies, vests, sweatpants, and sportswear capsules engineered in Nairobi, Kenya.",
  openGraph: {
    title: "Shop Mwotaji Official | Streetwear & Sportswear Collection",
    description:
      "Explore oversized tees, hoodies, vests, and dreamers essential wear. Crafted in Nairobi, Kenya.",
    url: "https://mwotajiofficial.vercel.app/shop",
  },
  alternates: {
    canonical: "https://mwotajiofficial.vercel.app/shop",
  },
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <ProductGrid products={products} />
      </main>
    </>
  )
}