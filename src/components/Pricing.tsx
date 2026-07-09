"use client";

import { useEffect, useRef } from "react";
import styles from "./Pricing.module.scss";

const plans = [
  {
    name: "Экскурсия",
    price: "от 1 000 ₽",
    period: "за человека",
    desc: "Индивидуальная экскурсия по одному маршруту",
    features: [
      "2–3 часа экскурсии",
      "Личный гид Зурган",
      "Трансфер на минивэне",
      "Входные билеты включены",
      "Фотосопровождение",
    ],
    cta: "Забронировать",
    gradient: "linear-gradient(135deg, #b8651f 0%, #d4a574 100%)",
    popular: false,
  },
  {
    name: "Полный день",
    price: "от 3 500 ₽",
    period: "за человека",
    desc: "Многотематический тур на целый день",
    features: [
      "6–8 часов экскурсии",
      "2–3 локации за день",
      "Личный гид Зурган",
      "Трансфер на минивэне",
      "Обед в местной кухне",
      "Ритуал подношения",
    ],
    cta: "Забронировать",
    gradient: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)",
    popular: true,
  },
  {
    name: "Выездной тур",
    price: "от 8 000 ₽",
    period: "за человека",
    desc: "Многodneвный маршрут с проживанием",
    features: [
      "2–4 дня путешествия",
      "Проживание в юрте/отеле",
      "Питание включено",
      "Все трансферы",
      "Все экскурсии",
      "Костёр и звёздное небо",
    ],
    cta: "Узнать детали",
    gradient: "linear-gradient(135deg, #2d7a7a 0%, #4da8a8 100%)",
    popular: false,
  },
];

export default function Pricing() {
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
    <section ref={sectionRef} id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Стоимость</span>
          <h2 className={styles.sectionTitle}>Форматы и цены</h2>
          <p className={styles.sectionDesc}>
            Выберите подходящий формат — от короткой экскурсии до многодневого путешествия
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={`${styles.card} ${plan.popular ? styles.popular : ""}`}>
              {plan.popular && <div className={styles.popularBadge}>Популярный</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.cardName}>{plan.name}</h3>
                <div className={styles.cardPriceBlock}>
                  <span className={styles.cardPrice}>{plan.price}</span>
                  <span className={styles.cardPeriod}>{plan.period}</span>
                </div>
                <p className={styles.cardDesc}>{plan.desc}</p>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacts" className={styles.cardBtn} style={{ background: plan.gradient }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
