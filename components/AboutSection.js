import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={styles.section}>

      <div className={styles.text}>
        <h1>Mwotaji means “The Dreamer” in Swahili.</h1>

        <h3>
          Not the kind that waits, the kind that moves.
        </h3>

        <p>
          We create sportswear and lifestyle pieces for people who train hard,
          live fully, and believe their discipline today builds tomorrow’s legacy.
        </p>

        {/* <p>
          <strong>Belong →</strong><br />
          <strong>Perform →</strong><br />
          <strong>Celebrate community</strong>
        </p> */}
      </div>
      <div className={styles.image}>
        <img src="/mwotaji11-ee.png" alt="Mwotaji Vision" />
      </div>
    </section>
  )
}
