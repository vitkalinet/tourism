"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import anime from "animejs";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    anime({
      targets: `.${styles.navLogo}`,
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.navLogo}>
        <span className={styles.navLogoSymbol}>☸</span>
        Калмыкия Тур
      </Link>
      <div className={styles.navActions}>
        <a href="#tours" className={styles.navHomeBtn}>
          Экскурсии
        </a>
        <a href="#booking" className={styles.navHomeBtn}>
          Бронирование
        </a>
        <a href="#about" className={styles.navHomeBtn}>
          О нас
        </a>
      </div>
    </nav>
  );
}