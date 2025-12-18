"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import CartPopup from "./CartPopup"
import styles from "./ProductDetail.module.css"

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [showPopup, setShowPopup] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity)
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000)
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left: Images */}
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={720}
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.thumbnails}>
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`${styles.thumbnail} ${selectedImage === index ? styles.thumbnailActive : ""}`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      width={100}
                      height={120}
                      className={styles.thumbnailImage}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className={styles.detailSection}>
              <h1 className={styles.name}>{product.name}</h1>
              <p className={styles.price}>KES {product.price.toLocaleString()}</p>

              <p className={styles.description}>{product.description}</p>

              <div className={styles.sizeSelector}>
                <label className={styles.label}>Size</label>
                <div className={styles.sizeOptions}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeButtonActive : ""}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.quantitySelector}>
                <label className={styles.label}>Quantity</label>
                <div className={styles.quantityControls}>
                  <button onClick={decrementQuantity} className={styles.quantityButton}>
                    -
                  </button>
                  <span className={styles.quantityValue}>{quantity}</span>
                  <button onClick={incrementQuantity} className={styles.quantityButton}>
                    +
                  </button>
                </div>
              </div>

              <button onClick={handleAddToCart} className={styles.addToCartButton}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <CartPopup show={showPopup} productName={product.name} />
    </>
  )
}
