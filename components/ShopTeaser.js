import styles from "./ShopTeaser.module.css";

export default function ShopTeaser() {
  const categories = [
    { 
      name: "Football Events", 
      desc: "Watch the latest battle", 
      img: "/mwotaji-football-win.jpg",
      link: "https://www.instagram.com/reel/C_AdhPPCNsM/" 
    },
    { 
      name: "The Padel Series", 
      desc: "Community & events", 
      img: "/mwotaji14.jpg",
      link: "https://www.instagram.com/reel/DPtjUhCjMZB/" 
    },
    { 
      name: "Movement", 
      desc: "Training with intention", 
      img: "/mwotaji5.jpg",
      link: "https://instagram.com/mwotajiofficial" 
    }
  ];

  return (
    <section id="the-tribe" className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.eyebrow}>The Tribe</span>
        <h2 className={styles.title}>MOVEMENT BEYOND <br/> THE GARMENT</h2>
        <p className={styles.subtitle}>
          Mwotaji is worn by athletes, creatives, and everyday people who take their growth seriously.
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <a 
            key={i} 
            href={cat.link} 
            target={cat.link.startsWith('http') ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imgBox}>
              <img src={cat.img} alt={cat.name} />
              <div className={styles.overlay}>
                <div className={styles.info}>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.action}>
        <a href="/shop" className={styles.mainBtn}>Explore the Collection</a>
      </div>
    </section>
  );
}