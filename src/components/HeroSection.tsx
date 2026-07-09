"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const heroTitle = useRef<HTMLHeadingElement>(null);
  const heroSubtitle = useRef<HTMLParagraphElement>(null);
  const scrollIndicator = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime({
      targets: heroTitle.current,
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1500,
      easing: "easeOutExpo",
    });

    anime({
      targets: heroSubtitle.current,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 600,
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: scrollIndicator.current,
      opacity: [0.5, 1, 0.5],
      translateY: [0, 10, 0],
      loop: true,
      duration: 2000,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroOrb + " " + styles.orb1}></div>
      <div className={styles.heroOrb + " " + styles.orb2}></div>
      <div className={styles.heroOrb + " " + styles.orb3}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroSymbol}>☸</div>
        <h1 ref={heroTitle} className={styles.heroTitle}>
          Калмыкия
        </h1>
        <p ref={heroSubtitle} className={styles.heroSubtitle}>
          Путешествие в страну степей, буддизма и кочевой культуры
        </p>
        <p className={styles.heroDescription}>
          Хурулы • Степь • Сайгаки • Барханы • Лотосы • Юрты
        </p>
        <p className={styles.heroQuote}>
          «Здесь небо ближе, а звёзды ярче — почувствуйте дух Великой Степи»
        </p>
      </div>
      <div ref={scrollIndicator} className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}>↓</div>
        <span className={styles.scrollText}>Листайте вниз</span>
      </div>
    </section>
  );
}