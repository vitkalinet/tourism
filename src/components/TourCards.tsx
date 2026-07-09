"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { tours } from "@/data/tours";
import styles from "./PeopleCards.module.scss";

export default function TourCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime({
      targets: `.${styles.card}`,
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.9, 1],
      delay: anime.stagger(200, { start: 300 }),
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: `.${styles.cardBanner}`,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 500 }),
      duration: 1000,
      easing: "easeOutQuad",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      cards.forEach((card, index) => {
        const factor = (index % 2 === 0 ? 1 : -1) * 8;
        anime({
          targets: card,
          translateX: mouseX * factor,
          translateY: mouseY * factor,
          duration: 800,
          easing: "easeOutQuad",
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="tours" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>
          Уникальные экскурсии и туры
        </span>
        <h2 className={styles.sectionTitle}>Откройте Калмыкию</h2>
        <p className={styles.sectionDesc}>
          Выберите приключение по душе — от духовных практик до степных походов
        </p>
      </div>

      <div ref={cardsRef} className={styles.cardsGrid}>
        {tours.map((tour) => (
          <div key={tour.id} className={styles.card}>
            <div className={styles.cardBanner}>
              <div style={{ background: tour.gradient }} className={styles.cardBannerGradient}>
                <span className={styles.cardIcon}>{tour.icon}</span>
              </div>
              <div className={styles.cardBannerOverlay}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardCategory}>{tour.categoryLabel}</div>
              <div className={styles.cardName}>{tour.title}</div>
              <div className={styles.cardNative}>{tour.subtitle}</div>
              <div className={styles.cardTagline}>{tour.description.substring(0, 100)}...</div>
              <div className={styles.cardMeta}>
                <span className={styles.badge}>{tour.duration}</span>
                <span className={styles.badge}>{tour.price}</span>
                <span className={styles.badge}>{tour.season}</span>
              </div>
              <div className={styles.cardHighlights}>
                {tour.highlights.slice(0, 3).map((h, i) => (
                  <span key={i} className={styles.highlightItem}>• {h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}