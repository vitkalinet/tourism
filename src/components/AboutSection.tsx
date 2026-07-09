"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: `.${styles.featureCard}`,
              opacity: [0, 1],
              translateY: [50, 0],
              delay: anime.stagger(150),
              duration: 1000,
              easing: "easeOutExpo",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "☸",
      title: "Буддийская культура",
      text: "Единственный регион в Европе с буддизмом как традиционной религией. Хурулы, ступы и горловое пение.",
    },
    {
      icon: "🏜",
      title: "Уникальная природа",
      text: "Поющие барханы, розовое озеро, заповедные степи с сайгаками — антилопами-ровесниками мамонтов.",
    },
    {
      icon: "⛺",
      title: "Кочевая жизнь",
      text: "Погружение в быт номадов: ночёвка в юрте, походы на верблюдах, чаепитие у костра под звёздным небом.",
    },
    {
      icon: "🪷",
      title: "Священные места",
      text: "Цветение лотосов, место силы Одинокий тополь, целебные родники и Горящий источник.",
    },
    {
      icon: "♟",
      title: "Город шахмат",
      text: "Элиста — шахматная столица России. Всемирная олимпиада и дух Остапа Бендера в каждом камне.",
    },
    {
      icon: "🌿",
      title: "Тибетская медицина",
      text: "Оздоровительные программы: врачи тибетской медицины, астрология, массаж и целебные практики.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>О Калмыкии</span>
        <h2 className={styles.sectionTitle}>Зачем ехать в Калмыкию</h2>
        <p className={styles.sectionDesc}>
          Республика на юге России — единственный регион Европы с буддийской культурой и кочевыми традициями
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}