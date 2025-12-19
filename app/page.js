import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import LifestyleSection from "@/components/LifestyleSection"
import ShopTeaser from "@/components/ShopTeaser"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <LifestyleSection />
        <ShopTeaser />
      </main>
    </>
  )
}
