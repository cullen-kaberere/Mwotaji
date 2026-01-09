import styles from "./LifestyleSection.module.css"

export default function LifestyleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h1>
          SPORTSWEAR<br />
          AS A WAY OF LIFE
        </h1>

        <h3>
          Mwotaji exists at the intersection of heritage and modern performance.
        </h3>
      </div>

      <div className={styles.image}>
        <img src="/mwotaji1-E.png" alt="Mwotaji Lifestyle" />
      </div>
    </section>
  )
}
