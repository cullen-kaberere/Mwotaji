import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import ProductDetail from "@/components/ProductDetail"
import { getProductBySlug } from "@/lib/products"
import { notFound } from "next/navigation"

/* ✅ FIXED: params must be awaited */
export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | Mwotaji Official",
    }
  }

  return {
    title: `${product.name} | Mwotaji Official`,
    description: product.description,
  }
}

/* ✅ FIXED: async page + await params */
export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <CartProvider>
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
    </CartProvider>
  )
}
