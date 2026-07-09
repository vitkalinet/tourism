"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Footer.module.scss";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    anime({
      targets: footerRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 1500,
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.footerLogo}>
        <div className={styles.footerLogoMark}>☸</div>
        <div className={styles.footerLogoText}>КАЛМЫКИЯ ТУР</div>
      </div>
      <p className={styles.footerTagline}>
        Экскурсии и туры по Республике Калмыкия — стране степей и буддизма
      </p>
      <div className={styles.footerLinks}>
        <a href="#tours" className={styles.footerLink}>
          Экскурсии
        </a>
        <a href="#booking" className={styles.footerLink}>
          Бронирование
        </a>
        <a href="#about" className={styles.footerLink}>
          О нас
        </a>
        <a
          href="https://zurgan.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zurgan.ru
        </a>
      </div>
      <div className={styles.footerCopy}>
        © 2026 Калмыкия Тур. Путешествия с уважением к культуре и природе.
      </div>
    </footer>
  );
}