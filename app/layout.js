import "./globals.css"
import { CartProvider } from "@/context/CartContext"

export const metadata = {
  title: "Mwotaji Official | Wear Your Purpose",
  description: "Premium African streetwear brand - Confidence, luxury, and motivation",
  generator: "cullen",
  icons: {
          icon: "/Mwotaji-favicon2.png",
        },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
