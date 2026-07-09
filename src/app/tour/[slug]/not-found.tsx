import Link from "next/link";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Экскурсия не найдена</h1>
        <p className={styles.desc}>
          Возможно, маршрут был удалён или вы ввели неверный адрес.
        </p>
        <Link href="/" className={styles.backBtn}>
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
