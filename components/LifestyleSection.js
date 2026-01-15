import styles from "./LifestyleSection.module.css"

export default function LifestyleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h1>
          MADE TO PERFORM.<br />
          DESIGNED TO LAST.
        </h1>

        <h3>
          Every piece is designed with intention, from fabric selection to fit, so it holds up in training, movement, and everyday life.
        </h3>

        {/* <p>
          No shortcuts.<br />
          No trends for the sake of it.<br />
          Just well-made gear that earns its place in your routine.
        </p> */}

        <div className={styles.actions}>
          <a href="/shop?sportswear" className={styles.primary}>Shop Sportswear</a><br />
          {/* <a href="/shop?lifestyle" className={styles.secondary}>Shop Lifestyle</a> */}
        </div>
      </div>

      <div className={styles.image}>
        <img src="/mwotaji1-E.png" alt="Mwotaji Lifestyle" />
      </div>
    </section>
  )
}
