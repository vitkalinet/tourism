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
        <img
          src="/Max_logo.svg"
          alt="Зурган — гид по Калмыкии"
          className={styles.navLogoImg}
        />
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
          className={styles.navMobileChat}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.mobileChatIcon}
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
          Написать в Max
        </a>
      </div>
    </nav>
  );
}
