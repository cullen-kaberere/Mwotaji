"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./ProductCard.module.css"

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={styles.imagePrimary}
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            className={styles.imageSecondary}
          />
        )}
      </div>

      <div className={styles.meta}>
        <h3 className={styles.name}>{product.name}</h3>
        <span className={styles.price}>KES {product.price.toLocaleString()}</span>
      </div>
    </Link>
  )
}
