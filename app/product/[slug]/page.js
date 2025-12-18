import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import ProductDetail from "@/components/ProductDetail"
import { getProductBySlug } from "@/lib/products"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Mwotaji Official`,
    description: product.description,
  }
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug)

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
