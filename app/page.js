import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import LifestyleSection from "@/components/LifestyleSection"
import ShopTeaser from "@/components/ShopTeaser"
import BrandStory from "@/components/BrandStory"
import ValueProp from "@/components/ValueProp"
import FinalCTA from "@/components/FinalCTA"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <LifestyleSection />
        <ValueProp />
        <ShopTeaser />
        <BrandStory />
        <FinalCTA />
      </main>
    </>
  )
}