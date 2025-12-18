"use client"

import styles from "./CartPopup.module.css"

export default function CartPopup({ show, productName }) {
  return (
    <div className={`${styles.popup} ${show ? styles.popupVisible : ""}`}>
      <div className={styles.popupContent}>
        <svg
          className={styles.checkIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <div>
          <p className={styles.popupTitle}>Added to cart</p>
          <p className={styles.popupProduct}>{productName}</p>
        </div>
      </div>
    </div>
  )
}
