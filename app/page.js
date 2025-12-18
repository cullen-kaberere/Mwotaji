import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function HomePage() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
      </main>
    </CartProvider>
  )
}
