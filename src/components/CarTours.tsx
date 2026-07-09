"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./CarTours.module.scss";

const tours = [
  {
    title: "Выходные в степи",
    desc: "3-дневный тур: барханы, сайгаки, ночёвка в юрте, костёр под звёздами",
    icon: "🏜",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    title: "Буддийский Круг",
    desc: "4-дневный маршрут: все хурулы Элисты, Аршан, монастырь Майтреи",
    icon: "☸",
    gradient: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)",
  },
  {
    title: "Сезонные мероприятия",
    desc: "Цветение лотосов (июль–август), Насад Хурал, Праздник Чамал",
    icon: "🎉",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

export default function CarTours() {
  const sectionRef = useInView<HTMLElement>(styles.visible, 0.1);

  return (
    <section ref={sectionRef} id="car-tours" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Выездные туры</span>
          <h2 className={styles.sectionTitle}>
            Автомобильные туры и мероприятия
          </h2>
          <p className={styles.sectionDesc}>
            Многодневные маршруты с трансфером, проживанием и полным погружением
            в жизнь степи
          </p>
        </div>

        <div className={styles.grid}>
          {tours.map((tour, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardVisual}>
                <div
                  className={styles.cardGradient}
                  style={{ background: tour.gradient }}
                >
                  <span className={styles.cardIcon}>{tour.icon}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{tour.title}</h3>
                <p className={styles.cardDesc}>{tour.desc}</p>
                <a href="#contacts" className={styles.cardBtn}>
                  Узнать подробнее →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
