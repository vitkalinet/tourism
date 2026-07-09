"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./AboutGuide.module.scss";

export default function AboutGuide() {
  const sectionRef = useInView<HTMLElement>(styles.visible, 0.15);

  const accreditations = [
    "Золотая обитель Будды Шакьямуни",
    "Национальный музей им. Пальмова",
    "Пагода Семи Дней",
    "Хурул Геден Шеддуп Чой Корлинг",
    "Парк «Дружба»",
    "Храм и статуя Майтреи",
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>О гиде</span>
          <h2 className={styles.sectionTitle}>
            Зурган — ваш проводник по Калмыкии
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.photoBlock}>
            <div className={styles.photoFrame}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Зурган — гид по Калмыкии"
                className={styles.photoImg}
              />
              <div className={styles.photoAccent}></div>
            </div>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.intro}>
              Я — Зурган, аттестованный гид по Калмыкии. С{" "}
              <strong>2019 года</strong> провожу авторские экскурсии по
              республике, показывая места, которые не найти в обычных
              путеводителях.
            </p>

            <p className={styles.detail}>
              Каждый маршрут — это история. История степи, буддизма, кочевой
              культуры и людей, которые здесь живут. Я знаю каждый хурул, каждый
              родник и каждую легенду — и готов поделиться ими с вами.
            </p>

            <div className={styles.certs}>
              <h3 className={styles.certsTitle}>Аккредитация</h3>
              <div className={styles.certsList}>
                {accreditations.map((item, i) => (
                  <div key={i} className={styles.certItem}>
                    <span className={styles.certCheck}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://zurgan.ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certLink}
              >
                Смотреть аттестат →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
