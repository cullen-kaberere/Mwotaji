// components/AboutSection.js
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* VISUAL SIDE WITH NEW CUTOUT IMAGE */}
        <div className={styles.visualSide}>
          <div className={styles.watermark}>DREAMER</div>
          <img 
            src="/mwotaji-rbg-10.png" 
            alt="Mwotaji Tribe - Keep Moving Keep Becoming" 
            className={styles.mainImg} 
          />
        </div>

        {/* TEXT CONTENT */}
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            Mwotaji means <br/><span>The Dreamer</span> in Swahili.
          </h2>
          
          <p className={styles.lead}>
            Not the kind that waits — <strong>the kind that moves.</strong>
          </p>
          
          <p className={styles.description}>
            We create sportswear and lifestyle pieces for people who train hard, 
            live fully, and believe their discipline builds legacy.
          </p>

          {/* CLEAN EDITORIAL PILLARS (Replaces button-style pills) */}
          <div className={styles.brandValues}>
            <span className={styles.valueItem}>Belong</span>
            <span className={styles.dot}>•</span>
            <span className={styles.valueItem}>Perform</span>
            <span className={styles.dot}>•</span>
            <span className={styles.valueItem}>Celebrate Community</span>
          </div>
        </div>

      </div>
    </section>
  );
}