import Image from "next/image"
import styles from "./BrandStory.module.css"

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <Image
            src="/mwotaji5-e.png"
            alt="Mwotaji story"
            fill
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.text}>
          <h1 className={styles.title}>Our Story</h1>

          <p className={styles.lead}>
            Mwotaji was created from a simple idea:
            that dreams mean nothing without action.
          </p>

          <p className={styles.body}>
            We saw a gap, not just in sportswear quality, but in representation.
            So we built something that reflects who we are, where we’re from,
            and where we’re going.
          </p>

          <p className={styles.emphasis}>
            This is for the ones still building.<br />
            Still learning.<br />
            Still showing up.
          </p>
        </div>
      </div>
    </section>
  )
}
