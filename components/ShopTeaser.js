import Link from "next/link"
import styles from "./ShopTeaser.module.css"

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <h1>Shop MwotajiOfficial</h1>
      <h2>MwotajiOfficial Essentials</h2>

      <p>Unisex Tees & Vests available — For now</p>

      <Link href="/shop" className={styles.button}>
        Shop Now
      </Link>
    </section>
  )
}
