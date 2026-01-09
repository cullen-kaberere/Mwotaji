import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img src="/mwotaji11-e.png" alt="Mwotaji Vision" />
      </div>

      <div className={styles.text}>
        <h1>BY KENYA. FOR THE WORLD.</h1>

        <h3>
          Mwotaji is built on the belief that discipline gives shape to dreams.
        </h3>

        <p>
          We create sportswear and lifestyle pieces for people who train with
          intention, live fully, and understand that progress is earned.
        </p>
      </div>
    </section>
  )
}
