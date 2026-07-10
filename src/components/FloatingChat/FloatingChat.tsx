"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingChat.module.scss";

export default function FloatingChat() {
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
      <img src="/Max.svg" alt="#" className={styles.icon} />
      <span className={styles.tooltip}>Написать в Max</span>
    </a>
  );
}
