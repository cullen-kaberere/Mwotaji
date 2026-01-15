import Link from "next/link"
import Image from "next/image"
import styles from "./ShopTeaser.module.css"

const EXPERIENCES = [
  { title: "Football Events", img: "/mwotaji-football-win.jpg", desc: "Organized matches and tournaments." },
  { title: "Community", img: "/mwotaji14.jpg", desc: "Pop-ups and social experiences." },
  { title: "Movement", img: "/mwotaji5.jpg", desc: "Intense training and consistency." }
]

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <h2 className={styles.tagline}>The Culture</h2>
      <h1 className={styles.title}>MOVEMENT BEYOND<br/>THE GARMENT</h1>
      
      <div className={styles.carouselContainer}>
        <div className={styles.track}>
          {EXPERIENCES.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image src={item.img} alt={item.title} fill className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/shop" className={styles.mainCta}>
        Enter the Collection
      </Link>
    </section>
  )
}