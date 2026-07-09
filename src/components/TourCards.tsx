"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { categories, getToursByCategory } from "@/data/tours";
import styles from "./TourCards.module.scss";

const imageMap: Record<string, string> = {
  khurul:
    "https://images.unsplash.com/photo-1545378892-f16a1c3dfa1d?w=600&q=80",
  "elista-walk":
    "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80",
  topol:
    "https://images.unsplash.com/photo-1501854140748-950c1eb73586?w=600&q=80",
  "palmov-museum":
    "https://images.unsplash.com/photo-1586348943529-beaae6c28fd9?w=600&q=80",
  "dunes-saigas":
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
  "nomads-camels":
    "https://images.unsplash.com/photo-1553678877-868445459655?w=600&q=80",
  "horse-riding":
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
  lotus: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  "tibetan-medicine":
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  massage:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
  "yurt-night":
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  "chess-bender":
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80",
};

export default function TourCards() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredTours = getToursByCategory(activeCategory);

  return (
    <section ref={sectionRef} id="tours" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Каталог</span>
          <h2 className={styles.sectionTitle}>Тематические экскурсии</h2>
          <p className={styles.sectionDesc}>
            12 уникальных маршрутов — от буддийских хурулов до степных
            приключений
          </p>
        </div>

        {/* Category filter */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tour grid */}
        <div className={styles.grid}>
          {filteredTours.map((tour) => (
            <Link
              href={`/tour/${tour.slug}`}
              key={tour.id}
              className={styles.card}
            >
              <div className={styles.cardVisual}>
                <img
                  src={
                    imageMap[tour.slug] ||
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                  }
                  alt={tour.title}
                  className={styles.cardImg}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardSeason}>{tour.season}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardCategory}>{tour.categoryLabel}</div>
                <h3 className={styles.cardTitle}>{tour.title}</h3>
                <p className={styles.cardDesc}>{tour.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardDuration}>{tour.duration}</span>
                  <span className={styles.cardPrice}>{tour.price}</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
