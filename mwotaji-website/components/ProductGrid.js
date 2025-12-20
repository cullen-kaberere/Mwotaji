"use client"

import { useEffect, useRef } from "react"
import ProductCard from "./ProductCard"
import styles from "./ProductGrid.module.css"

export default function ProductGrid({ products }) {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = gridRef.current?.querySelectorAll(`.${styles.card}`)
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>The Collection</h1>
          <p className={styles.subtitle}>Premium pieces for those who chase their dreams</p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {products.map((product, index) => (
            <div key={product.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
