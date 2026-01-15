import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <span className={styles.label}>Meaning & Origin</span>
          <h2 className={styles.title}>Mwotaji means <span className={styles.highlight}>“The Dreamer”</span> in Swahili.</h2>
          <h3 className={styles.tagline}>Not the kind that waits, the kind that moves.</h3>
          <p className={styles.description}>
            We create sportswear and lifestyle pieces for people who train hard,
            live fully, and believe their discipline today builds tomorrow’s legacy.
          </p>
        </div>
        <div className={styles.imageSystem}>
          <div className={styles.imageWindow}>
            <img src="/mwotaji11-ee.png" alt="Mwotaji Vision" className={styles.mainImg} />
          </div>
          <div className={styles.accentBox} />
        </div>
      </div>
    </section>
  )
}