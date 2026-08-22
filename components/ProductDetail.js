"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import CartPopup from "./CartPopup"
import SizeGuideModal from "./SizeGuideModal"
import styles from "./ProductDetail.module.css"

export default function ProductDetails({ product }) {
  const { addToCart } = useCart()

  const galleryImages =
    product?.images?.length > 0
      ? product.images
      : [product?.image]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || "M"
  )
  const [selectedColor, setSelectedColor] = useState(
    product?.colors ? product.colors[0].name : "Standard"
  )
  const [quantity, setQuantity] = useState(1)
  const [addedSuccess, setAddedSuccess] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  const discountedPrice = Math.round(product.price * 0.9)
  const currentImage = galleryImages[currentIndex] || product.image

  const handleNextImage = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % galleryImages.length
    )
  }

  const handlePrevImage = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryImages.length) %
        galleryImages.length
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor)
    }

    setAddedSuccess(true)
    setTimeout(() => setAddedSuccess(false), 2500)

    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000)
  }

  return (
    <div className={styles.wrapper}>
      {/* Floating Cart Toast Notification */}
      <CartPopup
        show={showPopup}
        productName={product.name}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
        product={product}
      />

      <div className={styles.container}>
        {/* Top Back Navigation Bar */}
        <div className={styles.topBar}>
          <Link
            href="/shop"
            className={styles.backBtn}
          >
            <span className={styles.backArrow}>←</span>{" "}
            BACK TO SHOP
          </Link>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column: Gallery */}
          <div className={styles.gallery}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={currentImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.mainImage}
              />

              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className={`${styles.navBtn} ${styles.prevBtn}`}
                    aria-label="Previous Image"
                    type="button"
                  >
                    ‹
                  </button>

                  <button
                    onClick={handleNextImage}
                    className={`${styles.navBtn} ${styles.nextBtn}`}
                    aria-label="Next Image"
                    type="button"
                  >
                    ›
                  </button>

                  <div className={styles.dotsRow}>
                    {galleryImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`${styles.dot} ${
                          currentIndex === idx
                            ? styles.activeDot
                            : ""
                        }`}
                        onClick={() =>
                          setCurrentIndex(idx)
                        }
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {galleryImages.length > 1 && (
              <div className={styles.thumbnails}>
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.thumbBtn} ${
                      currentIndex === idx
                        ? styles.activeThumb
                        : ""
                    }`}
                    onClick={() =>
                      setCurrentIndex(idx)
                    }
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="80px"
                      className={styles.thumbImg}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details */}
          <div className={styles.info}>
            <span className={styles.categoryTag}>
              {product.category}
            </span>

            <h1 className={styles.title}>
              {product.name}
            </h1>

            <div className={styles.priceContainer}>
              <span className={styles.price}>
                KES {product.price.toLocaleString()}
              </span>

              <div className={styles.bulkTag}>
                Buy 2+ items & pay{" "}
                <strong>
                  KES {discountedPrice.toLocaleString()}
                </strong>{" "}
                each
              </div>
            </div>

            <p className={styles.description}>
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors &&
              product.colors.length > 0 && (
                <div className={styles.optionGroup}>
                  <label
                    className={styles.optionLabel}
                  >
                    COLOR:{" "}
                    <span>{selectedColor}</span>
                  </label>

                  <div className={styles.colorSwatches}>
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        className={`${styles.colorChip} ${
                          selectedColor === c.name
                            ? styles.activeColorChip
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedColor(c.name)
                        }
                      >
                        <span
                          className={styles.chipSwatch}
                          style={{
                            backgroundColor: c.hex,
                          }}
                        />

                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Size Selection */}
            {product.sizes &&
              product.sizes.length > 0 && (
                <div className={styles.optionGroup}>
                  <div className={styles.sizeHeaderRow}>
                    <label
                      className={styles.optionLabel}
                    >
                      SIZE:{" "}
                      <span>{selectedSize}</span>
                    </label>

                    <button
                      type="button"
                      className={styles.sizeGuideBtn}
                      onClick={() =>
                        setShowSizeGuide(true)
                      }
                    >
                      SIZE GUIDE 📏
                    </button>
                  </div>

                  <div className={styles.sizeGrid}>
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`${styles.sizeBtn} ${
                          selectedSize === size
                            ? styles.activeSizeBtn
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedSize(size)
                        }
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Quantity Controls */}
            <div className={styles.optionGroup}>
              <label className={styles.optionLabel}>
                QUANTITY
              </label>

              <div
                className={styles.quantityPicker}
              >
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                  className={styles.qtyBtn}
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className={styles.qtyVal}>
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className={styles.qtyBtn}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Cart Button */}
            <button
              type="button"
              className={styles.addToCartBtn}
              onClick={handleAddToCart}
            >
              {addedSuccess
                ? "ADDED TO YOUR CART ✓"
                : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}