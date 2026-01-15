import styles from "./ShopTeaser.module.css";

export default function ShopTeaser() {
  const categories = [
    { name: "Football Events", desc: "Community matches & runs", img: "/mwotaji-football-win.jpg" },
    { name: "Community", desc: "Real people, real growth", img: "/mwotaji14.jpg" },
    { name: "Movement", desc: "Training with intention", img: "/mwotaji5.jpg" }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.eyebrow}>The Culture</span>
        <h2 className={styles.title}>MOVEMENT BEYOND THE GARMENT</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={cat.img} alt={cat.name} />
            </div>
            <div className={styles.info}>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.action}>
        <button className={styles.mainBtn}>Explore the Collection</button>
      </div>
    </section>
  );
}