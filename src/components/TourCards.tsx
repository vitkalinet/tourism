"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, getToursByCategory } from "@/data/tours";
import { imageMapSmall, defaultImageSmall } from "@/data/images";
import { useInView } from "@/hooks/useInView";
import styles from "./TourCards.module.scss";

export default function TourCards() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useInView<HTMLElement>(styles.visible, 0.1);

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
                  src={imageMapSmall[tour.slug] || defaultImageSmall}
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
