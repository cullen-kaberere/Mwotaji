// components/ProductGrid.jsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./ProductGrid.module.css"

export default function ProductGrid({ products }) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all"
    ? products
    : activeCategory === "dreamers"
    ? products.filter(p => p.category === "The Dreamers Essential")
    : products.filter(p => p.category !== "The Dreamers Essential")

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Collection Header */}
        <header className={styles.header}>
          <div className={styles.tagPill}>
            <span className={styles.greenDot} />
            <span>THE DREAMERS ESSENTIAL COLLECTION</span>
          </div>

          <h1 className={styles.heading}>
            DESIGNED FOR LEISURE <br />
            <span className={styles.headingMuted}>& HIGH-PERFORMANCE SPORT</span>
          </h1>

          <p className={styles.subtext}>
            Refined silhouettes, muted earth tones, and heavy-weight essential textiles.
          </p>

          {/* <div className={styles.offerCard}>
            <span className={styles.offerBadge}>AUTOMATIC OFFER</span>
            <span className={styles.offerText}>Purchase 2+ items to unlock 10% OFF your entire order</span>
          </div> */}
        </header>

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            ALL RELEASES ({products.length})
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'dreamers' ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory('dreamers')}
          >
            DREAMERS ESSENTIAL
          </button>
          {/* <button 
            className={`${styles.filterBtn} ${activeCategory === 'core' ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory('core')}
          >
            CORE CAPSULE
          </button> */}
        </div>

        {/* Product Cards Grid */}
        <div className={styles.grid}>
          {filteredProducts.map((product) => {
            const bulkDiscountPrice = Math.round(product.price * 0.9)

            return (
              <div key={product.id} className={styles.card}>
                <Link href={`/product/${product.slug}`} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    {/* Primary Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.primaryImg}
                    />

                    {/* Secondary Image on Hover */}
                    {product.hoverImage && (
                      <Image
                        src={product.hoverImage}
                        alt={`${product.name} secondary`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.hoverImg}
                      />
                    )}

                    <span className={styles.discountBadge}>10% OFF 2+</span>
                  </div>

                  <div className={styles.cardDetails}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.productTitle}>{product.name}</h3>
                      <span className={styles.arrowIcon}>→</span>
                    </div>

                    <div className={styles.metaRow}>
                      <div className={styles.priceContainer}>
                        <span className={styles.mainPrice}>
                          KES {product.price.toLocaleString()}
                        </span>
                        {/* <span className={styles.bulkOffer}>
                          (KES {bulkDiscountPrice.toLocaleString()} w/ 2+)
                        </span> */}
                      </div>

                      {/* Swatches indicator */}
                      {product.colors?.length > 0 && (
                        <div className={styles.swatchRow}>
                          {product.colors.map((c, i) => (
                            <span 
                              key={i} 
                              className={styles.colorDot} 
                              style={{ backgroundColor: c.hex }} 
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}