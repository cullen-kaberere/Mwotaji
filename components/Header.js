// components/Header.jsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import styles from "./Header.module.css"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        
        {/* BRAND LOGO */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/Mwotaji-pr-logo.png"
            alt="Mwotaji Official"
            width={175}
            height={44}
            priority
          />
        </Link>

        {/* RIGHT GROUP: MINIMAL NAV + CART + HAMBURGER */}
        <div className={styles.rightGroup}>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>
              SHOP
            </Link>
          </nav>

          <Link href="/cart" className={styles.cartIcon} aria-label="View Cart">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={menuOpen ? styles.open : ""}></span>
            <span className={menuOpen ? styles.open : ""}></span>
            <span className={menuOpen ? styles.open : ""}></span>
          </button>
        </div>

      </div>
    </header>
  )
}