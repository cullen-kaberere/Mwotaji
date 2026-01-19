import styles from "./LifestyleSection.module.css"

export default function LifestyleSection() {
  // Top Tape: Longer Brand Phrases (6-8 variations) [cite: 81-85]
  const phrases = [
    "KEEP BECOMING",
    "HONOR THE PROCESS",
    "TRIBE OF DREAMERS",
    "BET ON YOURSELF",
    "SHED THE OLD SKIN",
    "ELEVATE EVERY ROOM",
    "DREAMS REQUIRE ACTION"
  ];

  // Bottom Tape: Single Brand Core Words (8-10 variations) [cite: 7, 94-96]
  const coreWords = [
    "DREAMER",
    "MWOTAJI",
    "DISCIPLINE",
    "PERFORM",
    "LEGACY",
    "ROOTED",
    "INTENTIONAL",
    "GROUNDED",
    "MOVE",
    "STRENGTH"
  ];

  // Repeat arrays multiple times to create a truly endless, seamless loop
  const endlessPhrases = [...phrases, ...phrases, ...phrases, ...phrases];
  const endlessWords = [...coreWords, ...coreWords, ...coreWords, ...coreWords];

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

      {/* TAPE TRANSITION */}
      <div className={styles.tapeContainer}>
        {/* Top Tape: Phrases */}
        <div className={styles.stripeSolid}>
          <div className={styles.track}>
            {endlessPhrases.map((word, i) => (
              <span key={i} className={styles.tapeWord}>{word} • </span>
            ))}
          </div>
        </div>
        {/* Bottom Tape: Single Words */}
        <div className={styles.stripeOutline}>
          <div className={styles.trackReverse}>
            {endlessWords.map((word, i) => (
              <span key={i} className={styles.tapeWordOutline}>{word} • </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}