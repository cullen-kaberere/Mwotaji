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
          Mwotaji exists at the intersection of African heritage
          and modern performance culture.
        </h3>
      </div>

      <div className={styles.image}>
        <img src="/mwotaji1.jpg" alt="Mwotaji Lifestyle" />
      </div>
    </section>
  )
}
