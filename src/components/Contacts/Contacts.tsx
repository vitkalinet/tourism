"use client";

import { useInView } from "@/hooks/useInView";
import { tours } from "@/data/tours";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const sectionRef = useInView<HTMLElement>(styles.visible, 0.1);

  return (
    <section ref={sectionRef} id="contacts" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Контакты</span>
          <h2 className={styles.sectionTitle}>Свяжитесь со мной</h2>
          <p className={styles.sectionDesc}>
            Напишите в Max или позвоните — обсудим ваш маршрут и ответим на все
            вопросы
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactCards}>
            <a href="tel:+79962597786" className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h3 className={styles.contactName}>Позвонить</h3>
              <p className={styles.contactValue}>+7 (996) 259-77-86</p>
            </a>

            <a
              href="https://max.ru/79962597786"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactCard} ${styles.chat}`}
            >
              <div className={styles.contactIcon}>💬</div>
              <h3 className={styles.contactName}>Max</h3>
              <p className={styles.contactValue}>Написать сообщение</p>
            </a>

            <a
              href="https://t.me/zurgan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>✈️</div>
              <h3 className={styles.contactName}>Telegram</h3>
              <p className={styles.contactValue}>@zurgan</p>
            </a>

            <a
              href="https://instagram.com/zurgan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>📷</div>
              <h3 className={styles.contactName}>Instagram</h3>
              <p className={styles.contactValue}>@Zurgan</p>
            </a>
          </div>

          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Оставить заявку</h3>
            <p className={styles.formDesc}>
              Заполните форму — я свяжусь с вами в течение часа
            </p>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="Телефон"
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formInput}>
                  <option value="">Выберите экскурсию</option>
                  {tours.map((tour) => (
                    <option key={tour.id} value={tour.slug}>
                      {tour.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Комментарий"
                  rows={3}
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.formSubmit}>
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
