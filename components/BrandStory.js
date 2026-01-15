import Image from "next/image"
import styles from "./BrandStory.module.css"

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <Image src="/mwotaji5-e.png" alt="Mwotaji story" fill className={styles.image} />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Our Story</h2>
          <div className={styles.content}>
            <p className={styles.lead}>Dreams mean nothing without action.</p>
            <p className={styles.body}>
              We saw a gap, not just in sportswear quality, but in representation. 
              We built something that reflects who we are and where we’re going.
            </p>
            <div className={styles.manifesto}>
              <span>Still building.</span>
              <span>Still learning.</span>
              <span>Still showing up.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}