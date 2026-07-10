import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoSymbol}>☸</span>
              <span className={styles.logoText}>
                ЗУРГАН<span className={styles.logoDot}>.</span>
              </span>
            </div>
            <p className={styles.tagline}>
              Аттестованный гид по Калмыкии. С 2019 года.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Навигация</h4>
              <a href="#tours">Экскурсии</a>
              <a href="#about">О гиде</a>
              <a href="#advantages">Преимущества</a>
              <a href="#pricing">Стоимость</a>
              <a href="#contacts">Контакты</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Категории</h4>
              <a href="#tours">Культура</a>
              <a href="#tours">Природа</a>
              <a href="#tours">Приключения</a>
              <a href="#tours">Оздоровление</a>
            </div>
          </div>

          <div className={styles.social}>
            <h4 className={styles.linkGroupTitle}>Связаться</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://max.ru/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Max
              </a>
              <a
                href="https://t.me/zurgan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Telegram
              </a>
              <a
                href="https://instagram.com/zurgan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a
                href="https://zurgan.ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                zurgan.ru
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Зурган. Все права защищены.</p>
          <p className={styles.footnote}>
            Путешествия с уважением к культуре и природе Калмыкии
          </p>
        </div>
      </div>
    </footer>
  );
}
