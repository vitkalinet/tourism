"use client";

import { useEffect, useRef } from "react";
import styles from "./Contacts.module.scss";

export default function Contacts() {
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
    <section ref={sectionRef} id="contacts" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Контакты</span>
          <h2 className={styles.sectionTitle}>Свяжитесь со мной</h2>
          <p className={styles.sectionDesc}>
            Напишите в WhatsApp или позвоните — обсудим ваш маршрут и ответим на все вопросы
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactCards}>
            <a href="tel:+79001234567" className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h3 className={styles.contactName}>Позвонить</h3>
              <p className={styles.contactValue}>+7 (900) 123-45-67</p>
            </a>

            <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.whatsapp}`}>
              <div className={styles.contactIcon}>💬</div>
              <h3 className={styles.contactName}>WhatsApp</h3>
              <p className={styles.contactValue}>Написать сообщение</p>
            </a>

            <a href="https://t.me/zurgan" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>✈️</div>
              <h3 className={styles.contactName}>Telegram</h3>
              <p className={styles.contactValue}>@zurgan</p>
            </a>

            <a href="https://instagram.com/zurgan" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>📷</div>
              <h3 className={styles.contactName}>Instagram</h3>
              <p className={styles.contactValue}>@zurgan</p>
            </a>
          </div>

          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Оставить заявку</h3>
            <p className={styles.formDesc}>Заполните форму — я свяжусь с вами в течение часа</p>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Ваше имя" required className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="Телефон" required className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formInput}>
                  <option value="">Выберите экскурсию</option>
                  <option value="khurul">Буддизм легко и доступно</option>
                  <option value="elista-walk">Прогулка по Элисте</option>
                  <option value="topol">Одинокий тополь и родники</option>
                  <option value="palmov-museum">Музей Пальмова</option>
                  <option value="dunes-saigas">Поющие барханы и сайгаки</option>
                  <option value="nomads-camels">Кочевники и верблюды</option>
                  <option value="horse-riding">Конные прогулки</option>
                  <option value="lotus">Цветение лотосов</option>
                  <option value="tibetan-medicine">Тибетская медицина</option>
                  <option value="massage">Массаж и отдых</option>
                  <option value="yurt-night">Ночевка в юрте</option>
                  <option value="chess-bender">Шахматы и Остап Бендер</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Комментарий" rows={3} className={styles.formTextarea}></textarea>
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
