import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import CartPage from "@/components/CartPage"

export const metadata = {
  title: "Cart | Mwotaji Official",
  description: "Your shopping cart",
}

export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <CartPage />
      </main>
    </>
  )
}
