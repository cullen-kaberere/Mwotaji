import Image from "next/image"
import Link from "next/link"
import styles from "./BrandStory.module.css"

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heritageWatermark}>HERITAGE</div>

        <div className={styles.mainGrid}>
          <div className={styles.textSide}>
            <span className={styles.eyebrow}>The Origin</span>
            <h2 className={styles.title}>Our Story</h2>
            
            <div className={styles.description}>
              <p className={styles.lead}>Dreams mean nothing without action.</p>
              <p className={styles.body}>
                We saw a gap, not just in sportswear quality, but in representation. 
                We built something that reflects who we are and where we’re going.
              </p>
            </div>

            <div className={styles.manifestoStack}>
              <div className={styles.badge}>Still building</div>
              <div className={styles.badge}>Still learning</div>
              <div className={styles.badge}>Still showing up</div>
            </div>

            {/* INTEGRATED CTA BUTTONS */}
            <div className={styles.ctaGroup}>
              <Link href="/shop" className={styles.primaryBtn}>
                Shop Collection
              </Link>
              <Link href="/community" className={styles.secondaryBtn}>
                Join the Tribe
              </Link>
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.visualFrame}>
              <Image 
                src="/mwotaji-der.png" 
                alt="Mwotaji legacy" 
                fill 
                className={styles.image} 
              />
              <div className={styles.imageBackdrop} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}