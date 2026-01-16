import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Mwotaji Official | Wear Your Purpose",
  description: "Performance wear for dreamers in motion. Born in Kenya, inspired by community, sport, and the discipline of the African dreamer.",
  generator: "cullen",
  icons: {
    icon: "/Mwotaji-favicon2.png",
  },
  // Adding openGraph makes the link look premium when shared on WhatsApp/IG
  openGraph: {
    title: "Mwotaji Official",
    description: "Performance wear for dreamers in motion. Born in Kenya, inspired by community, sport, and the discipline of the African dreamer.",
    images: ["/Mwotaji-favicon2.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}