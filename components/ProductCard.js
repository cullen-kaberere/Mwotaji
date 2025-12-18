"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./ProductCard.module.css"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/product/${product.slug}`}
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={500}
          height={600}
          className={`${styles.image} ${isHovered ? styles.zoomed : ""}`}
        />
        <div className={`${styles.overlay} ${isHovered ? styles.overlayVisible : ""}`}>
          <span className={styles.viewProduct}>View Product</span>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>KES {product.price.toLocaleString()}</p>
      </div>
    </Link>
  )
}
