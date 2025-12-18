"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Hero.module.css"

const phrases = [
  "Wear Your Purpose",
  "Built From Vision",
  "Dream. Create. Become.",
  "This Is Mwotaji."
]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const speed = deleting ? 40 : 90

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500)
      } else if (deleting && text === "") {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        )
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {text}
          <span className={styles.cursor}>|</span>
        </h1>

        <p className={styles.subtitle}>
          Premium African Sportswear & Lifestyle Brand
        </p>

        <Link href="/shop" className={styles.cta}>
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
