import styles from "./LifestyleSection.module.css"

export default function LifestyleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h1>SPORTSWEAR<br />LIFESTYLE</h1>

        <h3>
          Mwotaji is the bridge between
          African heritage and global
          performance culture.
        </h3>
      </div>

      <div className={styles.image}>
        <img src="/mwotaji1.jpg" alt="Mwotaji Lifestyle" />
      </div>
    </section>
  )
}
