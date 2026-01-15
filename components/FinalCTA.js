import Link from "next/link"
import styles from "./FinalCTA.module.css"

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Join the Movement</h1>

        <p className={styles.text}>
          Whether you’re training, creating, or chasing something personal —
          Mwotaji is built to move with you.
        </p>

        <div className={styles.actions}>
          <Link href="/shop" className={styles.primary}>
            Shop the Collection
          </Link>

          <Link href="/community" className={styles.secondary}>
            Join the Tribe
          </Link>
        </div>
      </div>
    </section>
  )
}
