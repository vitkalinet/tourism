"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el1 = titleRef.current;
    const el2 = subtitleRef.current;
    const el3 = ctaRef.current;

    if (el1) {
      el1.style.opacity = "0";
      el1.style.transform = "translateY(40px)";
      setTimeout(() => {
        el1.style.transition = "opacity 1.2s ease, transform 1.2s ease";
        el1.style.opacity = "1";
        el1.style.transform = "translateY(0)";
      }, 300);
    }

    if (el2) {
      el2.style.opacity = "0";
      el2.style.transform = "translateY(30px)";
      setTimeout(() => {
        el2.style.transition = "opacity 1.2s ease, transform 1.2s ease";
        el2.style.opacity = "1";
        el2.style.transform = "translateY(0)";
      }, 700);
    }

    if (el3) {
      el3.style.opacity = "0";
      el3.style.transform = "translateY(20px)";
      setTimeout(() => {
        el3.style.transition = "opacity 1s ease, transform 1s ease";
        el3.style.opacity = "1";
        el3.style.transform = "translateY(0)";
      }, 1100);
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Калмыкия — степи и закаты"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot}></span>
          Официальный аттестованный гид
        </div>

        <h1 ref={titleRef} className={styles.heroTitle}>
          Ваш гид по
          <br />
          <span className={styles.heroTitleAccent}>Калмыкии</span>
        </h1>

        <p ref={subtitleRef} className={styles.heroSubtitle}>
          Зурган — аттестованный гид с 2019 года. Аккредитован в главных
          <br className={styles.heroBreak} />
          музеях и хурулах республики. Покажу то, что не найти в путеводителях.
        </p>

        <div ref={ctaRef} className={styles.heroActions}>
          <a href="#tours" className={styles.heroCta}>
            Смотреть все экскурсии
            <span className={styles.heroCtaArrow}>→</span>
          </a>
          <a href="#about" className={styles.heroCtaSecondary}>
            Обо мне
          </a>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>5+</span>
            <span className={styles.heroStatLabel}>лет опыта</span>
          </div>
          <div className={styles.heroStatDivider}></div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>12</span>
            <span className={styles.heroStatLabel}>уникальных маршрутов</span>
          </div>
          <div className={styles.heroStatDivider}></div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>1000+</span>
            <span className={styles.heroStatLabel}>гостей</span>
          </div>
        </div>
      </div>

      <div className={styles.heroScroll}>
        <div className={styles.heroScrollLine}></div>
        <span className={styles.heroScrollText}>Листайте вниз</span>
      </div>
    </section>
  );
}
