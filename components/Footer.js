"use client"

import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* LOGO */}
        <div className={styles.logoWrap}>
          <Image
            src="/Mwotaji-priy-logo.png"
            alt="Mwotaji Official"
            width={209}
            height={60}
            priority
          />
        </div>

        {/* MAIN MESSAGE */}
        <p className={styles.statement}>
          We’re building the future of African sportswear, storytelling, and
          community — <span>one dreamer at a time.</span>
        </p>

        {/* TAGLINE */}
        <p className={styles.tagline}>NEVER STOP DREAMING</p>

        {/* SOCIALS */}
        <div className={styles.socials}>
          <Link href="https://www.instagram.com/mwotajiofficial" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://www.youtube.com/@MwotajiTribeOfDreamers" aria-label="YouTube">
            <FaYoutube />
          </Link>
          <Link href="https://www.tiktok.com/@mwotajiofficial" aria-label="TikTok">
            <FaTiktok />
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} Mwotaji Official. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
