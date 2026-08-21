// components/CartPage.jsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import styles from "./CartPage.module.css"

export default function CartPage() {
  const router = useRouter()
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getSubtotal,
    hasBulkDiscount,
    getDiscountAmount,
    getCartTotal,
  } = useCart()

  if (cart.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <div className={styles.emptyIconCircle}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
            <p className={styles.emptyText}>
              Explore the new Mwotaji collection to build your fit and elevate your movement.
            </p>
            <Link href="/shop" className={styles.continueButton}>
              SHOP COLLECTION
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.headerRow}>
          <div>
            <h1 className={styles.title}>YOUR CART</h1>
            <p className={styles.subtitle}>{totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected</p>
          </div>
          <Link href="/shop" className={styles.backLink}>
            ← CONTINUE SHOPPING
          </Link>
        </div>

        <div className={styles.cartGrid}>
          {/* Left Column: Cart Items List */}
          <div className={styles.itemsList}>
            {cart.map((item) => {
              const itemKey = `${item.id}-${item.color || 'default'}-${item.size}`
              const itemTotalPrice = item.price * item.quantity

              return (
                <div key={itemKey} className={styles.cartItem}>
                  {/* Item Image */}
                  <div className={styles.itemImageWrapper}>
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        sizes="100px"
                        className={styles.itemImage}
                      />
                    ) : (
                      <div className={styles.imagePlaceholder} />
                    )}
                  </div>

                  {/* Details */}
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    
                    <div className={styles.itemMetaRow}>
                      <span className={styles.metaBadge}>SIZE: <strong>{item.size}</strong></span>
                      {item.color && (
                        <span className={styles.metaBadge}>
                          COLOR: <strong>{item.color}</strong>
                        </span>
                      )}
                    </div>

                    <p className={styles.itemPrice}>
                      KES {itemTotalPrice.toLocaleString()}
                      {item.quantity > 1 && (
                        <span className={styles.unitPrice}>
                          (KES {item.price.toLocaleString()} each)
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Controls (Quantity + Remove) */}
                  <div className={styles.itemControls}>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className={styles.quantityValue}>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Order Summary Side Panel */}
          <aside className={styles.summary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>ORDER SUMMARY</h2>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Subtotal</span>
                <span className={styles.summaryValue}>
                  KES {getSubtotal().toLocaleString()}
                </span>
              </div>

              {hasBulkDiscount() ? (
                <div className={`${styles.summaryRow} ${styles.discountRow}`}>
                  <span className={styles.summaryLabel}>2+ Items Promo (10% OFF)</span>
                  <span className={styles.discountValue}>
                    - KES {getDiscountAmount().toLocaleString()}
                  </span>
                </div>
              ) : (
                <div className={styles.discountBanner}>
                  <span className={styles.lightbulb}>💡</span>
                  <p>
                    Add <strong>{2 - totalItemsCount} more item</strong> to unlock <strong>10% OFF</strong> your order!
                  </p>
                </div>
              )}

              <div className={styles.summaryDivider} />

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabelBold}>TOTAL</span>
                <span className={styles.summaryValueBold}>
                  KES {getCartTotal().toLocaleString()}
                </span>
              </div>

              <button 
                className={styles.checkoutButton} 
                onClick={() => router.push("/checkout")}
              >
                PROCEED TO CHECKOUT
              </button>

              <p className={styles.secureBadge}>
                🔒 Secure WhatsApp / M-Pesa Checkout
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}