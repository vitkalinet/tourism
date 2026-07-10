"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#tours", label: "Экскурсии" },
    { href: "#about", label: "О гиде" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.navLogo}>
        <span className={styles.navLogoSymbol}>@</span>
        <span className={styles.navLogoText}>
          ЗУРГАН<span className={styles.navLogoDot}>.</span>
        </span>
      </Link>

      <div className={styles.navDesktop}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
        <a
          href="https://max.ru/79962597786"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navMax}
        >
          <img
            src="/Max_logo.svg"
            alt="Зурган — гид по Калмыкии"
            className={styles.MaxIcon}
          />
          Max
        </a>
      </div>

      <button
        className={styles.navMobileBtn}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Меню"
      >
        <span
          className={`${styles.navMobileBtnLine} ${mobileOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.navMobileBtnLine} ${mobileOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.navMobileBtnLine} ${mobileOpen ? styles.open : ""}`}
        ></span>
      </button>

      <div className={`${styles.navMobile} ${mobileOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navMobileLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://max.ru/79962597786"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navMobileWhatsApp}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.mobileWhatsappIcon}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
          Написать в Max
        </a>
      </div>
    </nav>
  );
}
