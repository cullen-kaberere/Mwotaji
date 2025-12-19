"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import styles from "./CartPopup.module.css"
import { FiShoppingCart } from "react-icons/fi"

export default function CartPopup({ show, productName }) {
  const [isVisible, setIsVisible] = useState(false)
  const [showText, setShowText] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()
  const router = useRouter()

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      setShowText(true)

      const timer = setTimeout(() => {
        setShowText(false)
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [show])

  const handleClick = () => {
    router.push("/cart")
  }

  if (!isVisible) return null

  return (
    <div
      className={`${styles.popup} ${styles.popupVisible}`}
      onClick={handleClick}
    >
      <div className={styles.popupContent}>
        <div className={styles.cartIconWrapper}>
          <FiShoppingCart className={styles.cartIcon} />

          {cartCount > 0 && (
            <span className={styles.cartBadge}>
              {cartCount}
            </span>
          )}
        </div>

        {showText && (
          <div className={styles.popupText}>
            <p className={styles.popupTitle}>Added to cart</p>
            <p className={styles.popupProduct}>{productName}</p>
          </div>
        )}
      </div>
    </div>
  )
}
