"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import styles from "./CartPage.module.css"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    router.push("/checkout")
  }

  if (cart.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
            <p className={styles.emptyText}>Start building your legacy. Every journey begins with a single step.</p>
            <Link href="/shop" className={styles.continueButton}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shopping Cart</h1>

        <div className={styles.cartGrid}>
          <div className={styles.itemsList}>
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} width={120} height={144} />
                </div>

                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemSize}>Size: {item.size}</p>
                  <p className={styles.itemPrice}>KES {item.price.toLocaleString()}</p>
                </div>

                <div className={styles.itemControls}>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id, item.size)} className={styles.removeButton}>
                    Remove
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  <p className={styles.totalPrice}>KES {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Subtotal</span>
                <span className={styles.summaryValue}>KES {getCartTotal().toLocaleString()}</span>
              </div>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Delivery</span>
                <span className={styles.summaryValue}>Calculated at checkout</span>
              </div>

              <div className={styles.summaryDivider}></div>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabelBold}>Total</span>
                <span className={styles.summaryValueBold}>KES {getCartTotal().toLocaleString()}</span>
              </div>

              <button onClick={handleCheckout} className={styles.checkoutButton}>
                Proceed to Checkout
              </button>

              <Link href="/shop" className={styles.continueShopping}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
