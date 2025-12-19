import Link from "next/link"
import styles from "./ShopTeaser.module.css"

export default function ShopTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Make new memories with our <br /> sports experiences
        </h1>

        <div className={styles.grid}>
          {/* CARD 1 */}
          <div className={styles.card}>
            <div className={`${styles.image} ${styles.football}`} />
            <h3>Football Events</h3>
            <p>
              We host and participate in football tournaments across the country.
            </p>
          </div>

          {/* CARD 2 */}
          <div className={styles.card}>
            <div className={`${styles.image} ${styles.social}`} />
            <h3>Social Events</h3>
            <p>
              Our community-friendly competitions and pop-up events bring the
              tribe together and foster new connections for holistic growth.
            </p>
          </div>

          {/* CARD 3 */}
          <div className={styles.card}>
            <div className={`${styles.image} ${styles.fitness}`} />
            <h3>Fitness Community</h3>
            <p>
              Low impact fitness? High impact fitness? We do it both. Moving,
              becoming, and growing together as a tribe — towards our best
              selves.
            </p>
          </div>
        </div>

        <Link href="/shop" className={styles.button}>
          Explore our Collection
        </Link>
      </div>
    </section>
  )
}
