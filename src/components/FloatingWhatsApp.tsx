"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingWhatsApp.module.scss";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://max.ru/79001234567?text=Здравствуйте,%20Зурган!%20Хочу%20забронировать%20экскурсию."
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.floatBtn} ${visible ? styles.visible : ""}`}
      aria-label="Написать в Max"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
      <span className={styles.tooltip}>Написать в Max</span>
    </a>
  );
}
