"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./CartPopup.module.css"
import { FiShoppingCart } from "react-icons/fi"

export default function CartPopup({ show, productName }) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (show) {
      setCollapsed(false)
      const timer = setTimeout(() => {
        setCollapsed(true)
      }, 2500) // 2.5 seconds before collapsing
      return () => clearTimeout(timer)
    }
  }, [show])

  const handleClick = () => {
    router.push("/cart")
  }

  return (
    <div
      className={`${styles.popup} ${show ? styles.popupVisible : ""} ${
        collapsed ? styles.collapsed : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles.popupContent}>
        <FiShoppingCart className={styles.cartIcon} />
        {!collapsed && (
          <div className={styles.popupText}>
            <p className={styles.popupTitle}>Added to cart</p>
            <p className={styles.popupProduct}>{productName}</p>
          </div>
        )}
      </div>
    </div>
  )
}
