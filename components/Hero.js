// components/Hero.js
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import styles from "./Hero.module.css"

const phrases = [
  "New Drop: 254 Capsule",
  "Tribe Of Dreamers",
  "Keep Moving, Keep Becoming",
  "Built With Discipline"
]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const current = phrases[index]
    const speed = deleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400)
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
    <section className={styles.heroSection}>
      
      {/* UNIVERSAL FULL-SCREEN VIDEO BACKGROUND */}
      <div className={styles.videoBgWrapper}>
        <video
          ref={videoRef}
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/mwotaji-campaign-916.mp4" type="video/mp4" />
        </video>
        
        {/* Gradients for readability and cinematic vignette */}
        <div className={styles.videoOverlay} />
        <div className={styles.vignetteOverlay} />
      </div>

      <div className={styles.container}>
        
        {/* HERO TEXT & CALL TO ACTIONS */}
        <div className={styles.textContent}>
          <div className={styles.campaignBadge}>
            <span className={styles.badgePulse}></span>
            NEW CAMPAIGN DROP
          </div>

          <h1 className={styles.title}>
            TRIBE OF <br />
            <span className={styles.highlight}>DREAMERS</span>
          </h1>

          <p className={styles.subtitle}>
            Performance sportswear built for movement, discipline, and purpose. Explore our latest 254 capsule release.
          </p>

          <div className={styles.typewriterWrapper}>
            <span className={styles.typewriterLabel}>FEATURED:</span>
            <span className={styles.typewriterText}>
              {text}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/shop" className={styles.ctaPrimary}>
              Shop Drop
            </Link>
            <Link href="/#the-tribe" className={styles.ctaSecondary}>
              The Tribe
            </Link>
          </div>
        </div>

      </div>

      {/* SOCIAL LINKS */}
      <div className={styles.socials}>
        <Link href="https://instagram.com/mwotajiofficial" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </Link>
        <Link href="https://youtube.com/@MwotajiTribeOfDreamers" target="_blank" aria-label="YouTube">
          <FaYoutube />
        </Link>
        <Link href="https://tiktok.com/@mwotajiofficial" target="_blank" aria-label="TikTok">
          <FaTiktok />
        </Link>
      </div>

    </section>
  )
}