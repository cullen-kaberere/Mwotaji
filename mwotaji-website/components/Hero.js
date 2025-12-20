"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
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
      {/* SOCIALS */}
      <div className={styles.socials}>
        <Link
          href="https://www.instagram.com/mwotajiofficial"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://www.youtube.com/@MwotajiTribeOfDreamers"
          target="_blank"
          aria-label="YouTube"
        >
          <FaYoutube />
        </Link>

        <Link
          href="https://www.tiktok.com/@mwotajiofficial"
          target="_blank"
          aria-label="TikTok"
        >
          <FaTiktok />
        </Link>
      </div>

      {/* HERO CONTENT */}
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
