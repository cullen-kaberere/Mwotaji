"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import styles from "./Hero.module.css"

const phrases = [
  "Shop New Drop",
  "View Lookbook",
  "The Tribe",
  "Built With Discipline"
]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const speed = deleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200)
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

      {/* Video Background */}
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/mwotaji-video-bgv1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>Established 2024</div>

        <h1 className={styles.title}>
          PERFORMANCE <br />
          <span>WEAR</span>
        </h1>

        <p className={styles.subtitle}>
          Performance sportswear built for movement, discipline, and purpose.
        </p>

        <p className={styles.typewriter}>
          {text}
          <span className={styles.cursor}>|</span>
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

      {/* Socials */}
      <div className={styles.socials}>
        <Link href="https://instagram.com/mwotajiofficial" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="https://youtube.com/@MwotajiTribeOfDreamers" target="_blank">
          <FaYoutube />
        </Link>
        <Link href="https://tiktok.com/@mwotajiofficial" target="_blank">
          <FaTiktok />
        </Link>
      </div>

    </section>
  )
}
