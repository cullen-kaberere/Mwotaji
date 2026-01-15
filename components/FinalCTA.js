import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      {/* Optional: Small decorative transparent image to ground the section */}
      <div className={styles.visualPeeker}>
        <img src="/mwotaji-logo-mark.png" alt="" className={styles.peekImg} />
      </div>

      <div className={styles.buttonWrapper}>
        <Link href="/shop" className={styles.primaryBtn}>
          Shop Collection
        </Link>
        <Link href="/community" className={styles.secondaryBtn}>
          Join the Tribe
        </Link>
      </div>
    </section>
  );
}