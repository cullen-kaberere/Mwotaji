"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok, FaVolumeMute, FaVolumeUp } from "react-icons/fa"
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
  const [isMuted, setIsMuted] = useState(true)
  
  const desktopVideoRef = useRef(null)
  const mobileVideoRef = useRef(null)

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

  const toggleAudio = () => {
    const nextMuteState = !isMuted
    setIsMuted(nextMuteState)

    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuteState
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuteState
  }

  return (
    <section className={styles.heroSection}>
      
      {/* MOBILE-ONLY FULL-SCREEN VIDEO BACKGROUND */}
      <div className={styles.mobileVideoBgWrapper}>
        <video
          ref={mobileVideoRef}
          className={styles.mobileVideoBg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/mwotaji-campaign-916.mp4" type="video/mp4" />
        </video>
        <div className={styles.mobileOverlay} />
      </div>

      <div className={styles.container}>
        
        {/* LEFT / CENTER CONTENT */}
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

        {/* DESKTOP-ONLY 9:16 VIDEO CARD SHOWCASE */}
        <div className={styles.mediaContent}>
          <div className={styles.videoCardWrapper}>
            
            {/* Dynamic Ambient Background Glow */}
            <video
              className={styles.ambientVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src="/mwotaji-campaign-916.mp4" type="video/mp4" />
            </video>

            {/* Main Interactive 9:16 Card */}
            <div className={styles.videoCard}>
              <video
                ref={desktopVideoRef}
                className={styles.mainVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/mwotaji-campaign-916.mp4" type="video/mp4" />
              </video>

              <div className={styles.frameTag}>SS/26 RELEASE</div>
            </div>

          </div>
        </div>

      </div>

      {/* FLOATING SOUND CONTROL TOGGLE (APPLIES TO BOTH MOBILE & DESKTOP) */}
      {/* <button 
        onClick={toggleAudio} 
        className={styles.soundToggle}
        aria-label="Toggle Sound"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        <span>{isMuted ? "SOUND ON" : "MUTED"}</span>
      </button> */}

      {/* SOCIALS */}
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