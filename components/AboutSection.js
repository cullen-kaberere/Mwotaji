import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img src="/mwotaji11.jpg" alt="Mwotaji Vision" />
      </div>

      <div className={styles.text}>
        <h1>BY KENYA. FOR THE WORLD.</h1>

        <h3>
          Mwotaji is a premium sportswear and lifestyle brand rooted in
          movement, mindfulness, and cultural identity.
        </h3>

        <p>
          We design for those who honor the process — athletes, creators,
          and individuals committed to becoming their highest self.
        </p>
      </div>
    </section>
  )
}
