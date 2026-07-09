"use client";

import { useEffect, useRef } from "react";
import styles from "./Advantages.module.scss";

const advantages = [
  {
    icon: "📜",
    title: "Аттестованный гид",
    desc: "Официальный аттестат. Аккредитация в главных музеях и хурулах республики.",
  },
  {
    icon: "🗓",
    title: "Опыт с 2019 года",
    desc: "Более 5 лет проводил экскурсии по Калмыкии. Знаю каждый уголок республики.",
  },
  {
    icon: "✨",
    title: "Уникальные маршруты",
    desc: "Авторские экскурсии, которых нет в путеводителях. Только аутентичный опыт.",
  },
  {
    icon: "☸",
    title: "Буддийская культура",
    desc: "Глубокое знание буддийских традиций, обрядов и духовных практик.",
  },
  {
    icon: "🚐",
    title: "Комфортный минивэн",
    desc: "Кондиционер, вместительный багажник, мягкие кресла — комфорт в дороге.",
  },
  {
    icon: "🔥",
    title: "Ритуалы и обряды",
    desc: "По желанию проведу ритуал подношения духам земли и воды, чаепитие у костра.",
  },
];

export default function Advantages() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="advantages" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Почему я</span>
          <h2 className={styles.sectionTitle}>Преимущества путешествия со мной</h2>
          <p className={styles.sectionDesc}>
            Каждый элемент экскурсии продуман для вашего комфорта и незабываемых впечатлений
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
