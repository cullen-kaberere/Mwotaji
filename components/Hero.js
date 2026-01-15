"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import styles from "./Hero.module.css"

const phrases = [
  "MWOTAJI",
  "PERFORMANCE WEAR",
  "BUILT WITH DISCIPLINE",
  "KEEP BECOMING."
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
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <div className={styles.badge}>Established 2024</div>
        <h1 className={styles.title}>
          {text}<span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.subtitle}>
          Performance sportswear built for movement, discipline, and purpose.
        </p>

        <div className={styles.buttonGroup}>
          <Link href="/shop" className={styles.ctaPrimary}>
            Shop Collection
          </Link>
          <Link href="/#the-tribe" className={styles.ctaSecondary}>
            The Tribe
          </Link>
        </div>
      </div>

      <div className={styles.socials}>
        <Link href="https://instagram.com/mwotajiofficial" target="_blank"><FaInstagram /></Link>
        <Link href="https://youtube.com/@MwotajiTribeOfDreamers" target="_blank"><FaYoutube /></Link>
        <Link href="https://tiktok.com/@mwotajiofficial" target="_blank"><FaTiktok /></Link>
      </div>
    </section>
  )
}