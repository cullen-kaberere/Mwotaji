import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"
import styles from "./about.module.css"

export const metadata = {
  title: "About | Mwotaji Official",
  description: "Learn about our brand story",
}

export default function AboutPage() {
  return (
    <CartProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>About Mwotaji</h1>
            <div className={styles.content}>
              <p className={styles.text}>
                Mwotaji Official represents more than just clothing - we embody confidence, African identity, and the
                relentless pursuit of dreams.
              </p>
              <p className={styles.text}>
                Our premium streetwear collection is designed for visionaries, dreamers, and those who refuse to settle
                for ordinary. Every piece carries a message of motivation and purpose.
              </p>
              <p className={styles.text}>
                We believe that what you wear should inspire you to become the best version of yourself. This is Mwotaji
                - where style meets substance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </CartProvider>
  )
}
