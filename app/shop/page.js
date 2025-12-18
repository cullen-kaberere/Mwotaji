import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import ProductGrid from "@/components/ProductGrid"
import { products } from "@/lib/products"

export const metadata = {
  title: "Shop | Mwotaji Official",
  description: "Browse our premium streetwear collection",
}

export default function ShopPage() {
  return (
    <CartProvider>
      <Header />
      <main>
        <ProductGrid products={products} />
      </main>
    </CartProvider>
  )
}
