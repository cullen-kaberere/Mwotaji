"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import styles from "./CheckoutPage.module.css"

const WHATSAPP_NUMBER = "254703201556"

export default function CheckoutPage() {
  const { cart, getCartTotal } = useCart()
  const router = useRouter()

  useEffect(() => {
    if (cart.length === 0) {
      router.replace("/cart")
    }
  }, [cart, router])

  const generateWhatsAppMessage = () => {
    let message = "🛍️ *NEW MWOTAJI ORDER*\n"
    message += "--------------------------\n\n"

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name.toUpperCase()}*\n`
      message += `   Size: ${item.size}\n`
      message += `   Qty: ${item.quantity}\n`
      message += `   Price: KES ${(item.price * item.quantity).toLocaleString()}\n\n`
    })

    message += "--------------------------\n"
    message += `*ORDER TOTAL: KES ${getCartTotal().toLocaleString()}*\n\n`
    message += "I'm ready to complete my order. Please confirm availability and delivery details! 🙏✨"

    return encodeURIComponent(message)
  }

  const handleCheckout = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`
    window.open(url, "_blank")
  }

  if (cart.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <span className={styles.eyebrow}>Final Step</span>
        <h1 className={styles.pageTitle}>Secure Your Fit</h1>

        <div className={styles.card}>
          <div className={styles.summary}>
            <h2 className={styles.sectionTitle}>Order Review</h2>

            <div className={styles.items}>
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className={styles.item}>
                  <div className={styles.itemThumb}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemMeta}>Size: {item.size} • Qty {item.quantity}</p>
                  </div>
                  <p className={styles.itemPrice}>
                    KES {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <span className={styles.totalAmount}>KES {getCartTotal().toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.checkout}>
            <h3 className={styles.checkoutTitle}>Direct Concierge Checkout</h3>
            <p className={styles.checkoutText}>
              Your order will be sent to our team via WhatsApp to finalize your delivery and payment details instantly.
            </p>

            <button className={styles.whatsappBtn} onClick={handleCheckout}>
              Complete via WhatsApp
            </button>

            <button
              className={styles.backBtn}
              onClick={() => router.push("/cart")}
            >
              Modify Order
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}