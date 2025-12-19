import "./globals.css"
import { CartProvider } from "@/context/CartContext"

export const metadata = {
  title: "Mwotaji Official | Wear Your Purpose",
  description: "Premium African streetwear brand - Confidence, luxury, and motivation",
  generator: "cullen",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
