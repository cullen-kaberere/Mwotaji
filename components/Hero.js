"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Hero.module.css"

const phrases = ["Wear Your Purpose", "Built From Vision", "Dream. Create. Become.", "This Is Mwotaji."]

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText === currentPhrase) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration)
        } else if (isDeleting && displayText === "") {
          // Move to next phrase
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        } else if (isDeleting) {
          // Delete character
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        } else {
          // Type character
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }
      },
      isDeleting && displayText === "" ? 500 : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, phraseIndex])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroText}>
          {displayText}
          <span className={`${styles.cursor} ${cursorVisible ? styles.visible : ""}`}>|</span>
        </h1>
        <p className={styles.heroSubtext}>Premium African Streetwear - Confidence, Luxury, Motivation</p>
        <Link href="/shop" className={styles.ctaButton}>
          Shop the Collection
        </Link>
      </div>

      <div className={styles.floatingShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>

      <div className={styles.grain}></div>
    </section>
  )
}
