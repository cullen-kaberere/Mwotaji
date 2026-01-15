import styles from "./ValueProp.module.css"

export default function ValueProp() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Why Mwotaji</span>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Performance First</h3>
            <p>Breathable fabrics. Athletic cuts. Built for everyday style with purpose.</p>
          </div>
          <div className={styles.card}>
            <h3>More Than Clothing</h3>
            <p>We build experiences, teams, and spaces where people grow together.</p>
          </div>
        </div>
      </div>
    </section>
  )
}