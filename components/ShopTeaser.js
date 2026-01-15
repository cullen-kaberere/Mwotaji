import Link from "next/link"
import Image from "next/image"
import styles from "./ShopTeaser.module.css"

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.topInfo}>
         <span className={styles.label}>The Tribe</span>
         <h2 className={styles.mainTitle}>MOVEMENT BEYOND <br/> THE GARMENT</h2>
      </div>

      <div className={styles.grid}>
        {[
          { t: "Football Events", d: "Matches & community tournaments.", i: "/mwotaji-football-win.jpg" },
          { t: "Community", d: "Social experiences & growth.", i: "/mwotaji14.jpg" },
          { t: "Shared Movement", d: "Training with intention.", i: "/mwotaji5.jpg" }
        ].map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.imgWrap}>
              <Image src={item.i} alt={item.t} fill className={styles.actualImg} />
            </div>
            <div className={styles.meta}>
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/shop" className={styles.collectionBtn}>Explore Collection</Link>
    </section>
  )
}