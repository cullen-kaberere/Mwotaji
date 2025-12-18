"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import styles from "./CheckoutPage.module.css"

// Replace with your actual WhatsApp number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "254712345678" // Example: Kenya number

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart()
  const router = useRouter()

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart")
    }
  }, [cart, router])

  const generateWhatsAppMessage = () => {
    let message = "🛍️ *New Order from Mwotaji Official*\n\n"

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `   Size: ${item.size}\n`
      message += `   Quantity: ${item.quantity}\n`
      message += `   Price: KES ${(item.price * item.quantity).toLocaleString()}\n\n`
    })

    message += `*Total: KES ${getCartTotal().toLocaleString()}*\n\n`
    message += "Please confirm my order and delivery details. Thank you!"

    return encodeURIComponent(message)
  }

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    // Optional: Clear cart after a delay (user can still go back)
    // Uncomment the line below if you want to clear cart immediately
    // clearCart()
  }

  if (cart.length === 0) {
    return null
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Complete Your Order</h1>

        <div className={styles.checkoutCard}>
          <div className={styles.preview}>
            <h2 className={styles.previewTitle}>Order Summary</h2>

            <div className={styles.itemsList}>
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className={styles.item}>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>
                      {item.name} ({item.size})
                    </p>
                    <p className={styles.itemQuantity}>Qty: {item.quantity}</p>
                  </div>
                  <p className={styles.itemPrice}>KES {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.total}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalValue}>KES {getCartTotal().toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.whatsappSection}>
            <div className={styles.whatsappIcon}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 0C10.745 0 0 10.745 0 24c0 4.243 1.107 8.229 3.038 11.678L0.413 45.59a1.5 1.5 0 001.997 1.997l9.912-2.625A23.902 23.902 0 0024 48c13.255 0 24-10.745 24-24S37.255 0 24 0z"
                  fill="#25D366"
                />
                <path
                  d="M35.5 29.5c-.5-.25-3-1.5-3.5-1.65-.5-.15-.85-.25-1.2.25-.35.5-1.4 1.65-1.7 2-.3.35-.6.4-1.1.15-3.2-1.6-5.3-2.85-7.4-6.45-.55-.95.55-1.1 1.6-2.8.15-.35.1-.65 0-.9-.1-.25-.9-2.15-1.2-2.95-.3-.75-.6-.65-.9-.65h-.75c-.35 0-.9.1-1.4.65-.5.55-1.8 1.8-1.8 4.35 0 2.55 1.85 5 2.1 5.35.25.35 3.55 5.45 8.6 7.65 3.2 1.4 4.45 1.5 6.05 1.25 1-.15 3-.3 3.45-2.15.45-1.85.45-3.45.3-3.75-.15-.3-.5-.45-1-.7z"
                  fill="#fff"
                />
              </svg>
            </div>

            <h3 className={styles.whatsappTitle}>Complete Order on WhatsApp</h3>
            <p className={styles.whatsappText}>
              Click the button below to send your order to us via WhatsApp. We'll confirm your order and arrange
              delivery details with you directly.
            </p>

            <button onClick={handleWhatsAppCheckout} className={styles.whatsappButton}>
              Complete Order on WhatsApp
            </button>

            <button onClick={() => router.push("/cart")} className={styles.backButton}>
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
