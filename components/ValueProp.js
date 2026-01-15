import styles from "./ValueProp.module.css"

export default function ValueProp() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Visual Anchor Side */}
        <div className={styles.visualAnchor}>
          <div className={styles.verticalWatermark}>WHY</div>
          <img 
            src="/mwotaji5-e.png" 
            alt="Mwotaji Performance" 
            className={styles.heroImg} 
          />
        </div>

        {/* Content Side */}
        <div className={styles.contentSide}>
          <span className={styles.label}>The Standard</span>
          <h2 className={styles.mainTitle}>Engineered for <br/>the relentless.</h2>
          
          <div className={styles.cardStack}>
            <div className={styles.glassCard}>
              <div className={styles.cardNumber}>01</div>
              <div className={styles.cardInfo}>
                <h3>Performance First</h3>
                <p>Breathable fabrics and athletic cuts. Built for everyday style with raw purpose.</p>
              </div>
            </div>

            <div className={styles.glassCard}>
              <div className={styles.cardNumber}>02</div>
              <div className={styles.cardInfo}>
                <h3>More Than Clothing</h3>
                <p>We build the experiences, teams, and spaces where the tribe grows together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}