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
    let message = "🛍️ *New Mwotaji Order*\n\n"

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `   Size: ${item.size}\n`
      message += `   Qty: ${item.quantity}\n`
      message += `   Subtotal: KES ${(item.price * item.quantity).toLocaleString()}\n\n`
    })

    message += `*TOTAL: KES ${getCartTotal().toLocaleString()}*\n\n`
    message += "Please confirm availability and delivery details."

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
        <h1 className={styles.pageTitle}>Checkout</h1>

        <div className={styles.card}>
          {/* ORDER SUMMARY */}
          <div className={styles.summary}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>

            <div className={styles.items}>
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className={styles.item}>
                  <div>
                    <p className={styles.itemName}>
                      {item.name} <span>({item.size})</span>
                    </p>
                    <p className={styles.itemQty}>Qty {item.quantity}</p>
                  </div>

                  <p className={styles.itemPrice}>
                    KES {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.totalRow}>
              <span>Total</span>
              <span>KES {getCartTotal().toLocaleString()}</span>
            </div>
          </div>

          {/* WHATSAPP CHECKOUT */}
          <div className={styles.checkout}>
            <h3 className={styles.checkoutTitle}>Complete Your Order</h3>
            <p className={styles.checkoutText}>
              We confirm stock, delivery location, and payment directly via WhatsApp.
            </p>

            <button className={styles.whatsappBtn} onClick={handleCheckout}>
              Complete Order on WhatsApp
            </button>

            <button
              className={styles.backBtn}
              onClick={() => router.push("/cart")}
            >
              ← Back to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
