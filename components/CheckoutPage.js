// components/CheckoutPage.jsx
"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import styles from "./CheckoutPage.module.css"

const WHATSAPP_NUMBER = "254710314337"

export default function CheckoutPage() {
  const { cart, getSubtotal, hasBulkDiscount, getDiscountAmount, getCartTotal } = useCart()
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
      if (item.color) {
        message += `   Color: ${item.color}\n`
      }
      message += `   Size: ${item.size}\n`
      message += `   Qty: ${item.quantity}\n`
      message += `   Price: KES ${(item.price * item.quantity).toLocaleString()}\n\n`
    })

    message += "--------------------------\n"
    message += `Subtotal: KES ${getSubtotal().toLocaleString()}\n`
    
    if (hasBulkDiscount()) {
      message += `Bulk Offer (10% OFF): -KES ${getDiscountAmount().toLocaleString()}\n`
    }
    
    message += `*FINAL TOTAL: KES ${getCartTotal().toLocaleString()}*\n\n`
    message += "I'm ready to complete my order! Please confirm delivery details. 🙏✨"

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
        <h1 className={styles.pageTitle}>SECURE YOUR FIT</h1>

        <div className={styles.card}>
          <div className={styles.summary}>
            <h2 className={styles.sectionTitle}>ORDER REVIEW</h2>

            <div className={styles.items}>
              {cart.map((item) => {
                const itemKey = `${item.id}-${item.color || 'default'}-${item.size}`
                
                return (
                  <div key={itemKey} className={styles.item}>
                    <div className={styles.itemThumb}>
                      {item.image ? (
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          sizes="60px" 
                          className={styles.thumbImg} 
                        />
                      ) : (
                        <div className={styles.thumbPlaceholder} />
                      )}
                    </div>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemMeta}>
                        {item.color && <span>Color: {item.color} • </span>}
                        Size: {item.size} • Qty: {item.quantity}
                      </p>
                    </div>
                    <p className={styles.itemPrice}>
                      KES {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className={styles.divider} />

            <div className={styles.priceBreakdown}>
              <div className={styles.row}>
                <span>Subtotal</span>
                <span>KES {getSubtotal().toLocaleString()}</span>
              </div>
              
              {hasBulkDiscount() && (
                <div className={`${styles.row} ${styles.discountRow}`}>
                  <span>10% Multi-item Discount</span>
                  <span>- KES {getDiscountAmount().toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className={styles.divider} />

            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <span className={styles.totalAmount}>KES {getCartTotal().toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.checkout}>
            <p className={styles.checkoutText}>
              Clicking below will transfer your order details directly to our official WhatsApp line to confirm stock & delivery location.
            </p>

            <button className={styles.whatsappBtn} onClick={handleCheckout}>
              COMPLETE ORDER VIA WHATSAPP
            </button>
            
            <button className={styles.backBtn} onClick={() => router.push("/cart")}>
              ← Modify Order Details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}