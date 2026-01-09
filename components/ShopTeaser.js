import Link from "next/link"
import Image from "next/image"
import styles from "./ShopTeaser.module.css"

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          MOVEMENT BEYOND THE GARMENT
        </h1>

        <div className={styles.grid}>
          {/* FOOTBALL */}
          <div className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src="/mwotaji-football-win.jpg"
                alt="Mwotaji football events"
                fill
                sizes="140px"
                className={styles.image}
                priority
              />
            </div>
            <h3>Football Events</h3>
            <p>
              Organized matches and tournaments that bring community,
              discipline, and shared purpose together.
            </p>
          </div>

          {/* SOCIAL */}
          <div className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src="/mwotaji14.jpg"
                alt="Mwotaji social events"
                fill
                sizes="140px"
                className={styles.image}
              />
            </div>
            <h3>Community Moments</h3>
            <p>
              Pop-ups and social experiences designed to connect,
              reflect, and grow — together.
            </p>
          </div>

          {/* FITNESS */}
          <div className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src="/mwotaji5.jpg"
                alt="Mwotaji fitness community"
                fill
                sizes="140px"
                className={styles.image}
              />
            </div>
            <h3>Shared Movement</h3>
            <p>
              From low-impact sessions to intense training,
              we move with intention and consistency.
            </p>
          </div>
        </div>

        <Link href="/shop" className={styles.button}>
          Enter the Collection
        </Link>
      </div>
    </section>
  )
}
