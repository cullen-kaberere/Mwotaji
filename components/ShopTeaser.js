import Link from "next/link"
import Image from "next/image"
import styles from "./ShopTeaser.module.css"

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Make new memories with our <br /> sports experiences
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
              We host and participate in football tournaments across the country.
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
            <h3>Social Events</h3>
            <p>
              Our community-friendly competitions and pop-up events bring the
              tribe together and foster new connections for holistic growth.
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
            <h3>Fitness Community</h3>
            <p>
              Low impact fitness? High impact fitness? We do it both. Moving,
              becoming, and growing together as a tribe.
            </p>
          </div>
        </div>

        <Link href="/shop" className={styles.button}>
          Explore the Collection
        </Link>
      </div>
    </section>
  )
}
