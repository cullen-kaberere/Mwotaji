"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import styles from "./CartPage.module.css"

export default function CartPage() {
  const router = useRouter()
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
  } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) return
    router.push("/checkout")
  }

  // ================= EMPTY CART =================
  if (cart.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
            <p className={styles.emptyText}>
              Looks like you haven’t added anything yet.
              Start building your Mwotaji fit.
            </p>
            <Link href="/shop" className={styles.continueButton}>
              Shop Mwotaji
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // ================= CART PAGE =================
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your Cart</h1>

        <div className={styles.cartGrid}>
          {/* ================= ITEMS ================= */}
          <div className={styles.itemsList}>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className={styles.cartItem}
              >
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemMeta}>
                    Size: <span>{item.size}</span>
                  </p>
                  <p className={styles.itemPrice}>
                    KES {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <div className={styles.itemControls}>
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>

                    <span className={styles.quantityValue}>
                      {item.quantity}
                    </span>

                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUMMARY ================= */}
          <aside className={styles.summary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Items</span>
                <span className={styles.summaryValue}>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className={styles.summaryDivider} />

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabelBold}>Total</span>
                <span className={styles.summaryValueBold}>
                  KES {getCartTotal().toLocaleString()}
                </span>
              </div>

              <button
                className={styles.checkoutButton}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <Link href="/shop" className={styles.continueShopping}>
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
