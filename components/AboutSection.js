import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.visualSide}>
          <div className={styles.watermark}>DREAMER</div>
          <img 
            src="/mwotaji11-ee.png" 
            alt="Mwotaji Vision" 
            className={styles.mainImg} 
          />
        </div>
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            Mwotaji means <br/><span>The Dreamer</span> in Swahili.
          </h2>
          <p className={styles.lead}>Not the kind that waits — <strong>the kind that moves.</strong></p>
          <p className={styles.description}>
            We create sportswear and lifestyle pieces for people who train hard, 
            live fully, and believe their discipline builds legacy.
          </p>
          <div className={styles.pillars}>
            <span className={styles.pill}>Belong </span>
            <span className={styles.pill}>Perform </span>
            <span className={styles.pill}>Celebrate Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}