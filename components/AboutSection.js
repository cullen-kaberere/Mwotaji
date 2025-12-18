import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img src="/mwotaji1.jpg" alt="Mwotaji Vision" />
      </div>

      <div className={styles.text}>
        <h1>By Kenya For The World</h1>

        <h3>
          Mwotaji is more than a sportswear line —
          it’s a tribe, a lifestyle brand at the intersection of
          sports, culture, and storytelling.
        </h3>

        <p>
          We exist to inspire athletes, dreamers, and everyday
          people to express themselves through fashion,
          competition, and community.
        </p>
      </div>
    </section>
  )
}
