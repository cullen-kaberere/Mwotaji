import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.glassInner}>
        <h2>Join the Movement</h2>
        <p>Whether you're training, creating, or chasing something personal—Mwotaji is built to move with you.</p>
        <div className={styles.btnStack}>
          <button className={styles.btnLight}>Shop Collection</button>
          <button className={styles.btnDark}>Join the Tribe</button>
        </div>
      </div>
    </section>
  );
}