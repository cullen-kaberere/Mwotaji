import styles from "./LifestyleSection.module.css"

export default function LifestyleSection() {
  return (
    <section className={styles.lifestyle}>
      <div className={styles.mainGrid}>
        <div className={styles.textSide}>
          <h2 className={styles.heading}>
            MADE TO PERFORM.<br />
            <span>DESIGNED TO LAST.</span>
          </h2>
          <p className={styles.sub}>
            Every piece is designed with intention, from fabric selection to fit, 
            so it holds up in training, movement, and everyday life.
          </p>
          <div className={styles.actionWrap}>
            <a href="/shop" className={styles.btn}>Explore Collection</a>
          </div>
        </div>
        <div className={styles.visualSide}>
          <img src="/mwotaji1-E.png" alt="Lifestyle" className={styles.lifestyleImg} />
        </div>
      </div>
    </section>
  )
  
}