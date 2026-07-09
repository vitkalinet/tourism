"use client";

import { useState, useRef } from "react";
import anime from "animejs";
import styles from "./ContactForm.module.scss";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    date: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    anime({
      targets: `.${styles.successMessage}`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: "easeOutExpo"
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", tour: "", date: "", message: "" });
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>Забронировать тур</span>
          <h2 className={styles.sectionTitle}>Начните ваше путешествие</h2>
          <p className={styles.sectionDesc}>
            Оставьте заявку — мы свяжемся с вами для подтверждения деталей
          </p>
        </div>

        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={`${styles.successMessage} ${styles.visible}`}>
              <div className={styles.successIcon}>✓</div>
              <h3>Заявка отправлена!</h3>
              <p>Мы свяжемся с вами в ближайшее время для подтверждения.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="example@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="tour" className={styles.label}>
                    Интересующий тур
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    <option value="">Выберите тур</option>
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
                  <label htmlFor="date" className={styles.label}>
                    Желаемая дата
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Комментарий
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Пожелания, количество человек, особые требования..."
                  rows={4}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Отправить заявку
                <span className={styles.submitBtnArrow}>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}