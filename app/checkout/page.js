import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import CheckoutPage from "@/components/CheckoutPage"

export const metadata = {
  title: "Checkout | Mwotaji Official",
  description: "Complete your order",
}

export default function Checkout() {
  return (
    <CartProvider>
      <Header />
      <main>
        <CheckoutPage />
      </main>
    </CartProvider>
  )
}
