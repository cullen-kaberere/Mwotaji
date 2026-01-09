"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import styles from "./Hero.module.css"

const phrases = [
  "MWOTAJI",
  "PERFORMANCE WEAR FOR THOSE IN MOTION",
  "BUILT WITH DISCIPLINE",
  "KEEP MOVING. KEEP BECOMING."
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
          Performance sportswear built for movement, discipline, and purpose.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/shop" className={styles.cta}>
            Shop the Collection
          </Link>

          <Link href="/community" className={styles.cta} style={{ background: "transparent", border: "1px solid #013927" }}>
            Explore the Tribe
          </Link>
        </div>
      </div>
    </section>
  )
}
