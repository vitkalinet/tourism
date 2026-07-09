import { notFound } from "next/navigation";
import Link from "next/link";
import { getTourBySlug, tours } from "@/data/tours";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import styles from "./TourPage.module.scss";

const imageMap: Record<string, string> = {
  khurul:
    "https://images.unsplash.com/photo-1545378892-f16a1c3dfa1d?w=1920&q=80",
  "elista-walk":
    "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80",
  topol:
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80",
  "palmov-museum":
    "https://images.unsplash.com/photo-1586348943529-beaae6c28fd9?w=1920&q=80",
  "dunes-saigas":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "nomads-camels":
    "https://images.unsplash.com/photo-1553678877-868445459655?w=1920&q=80",
  "horse-riding":
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=80",
  lotus:
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
  "tibetan-medicine":
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80",
  massage:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80",
  "yurt-night":
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80",
  "chess-bender":
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1920&q=80",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Экскурсия не найдена" };

  return {
    title: `${tour.title} — Экскурсия по Калмыкии | Зурган`,
    description: tour.shortDescription,
  };
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = tours.filter((t) => tour.related.includes(t.slug));
  const heroImage =
    imageMap[tour.slug] ||
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80";

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, Зурган! Хочу забронировать экскурсию "${tour.title}" на [Дата]. Количество человек: [N].`,
  );

  return (
    <div className={styles.page}>
      <FloatingWhatsApp />
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={heroImage} alt={tour.title} className={styles.heroImg} />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backBtn}>
            ← Все экскурсии
          </Link>
          <span className={styles.categoryTag}>{tour.categoryLabel}</span>
          <h1 className={styles.title}>{tour.title}</h1>
          <p className={styles.subtitle}>{tour.subtitle}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>⏱</span>
              <span>{tour.duration}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>💰</span>
              <span>{tour.price}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>📅</span>
              <span>{tour.season}</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a
              href={`https://wa.me/79001234567?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Забронировать →
            </a>
            <a
              href={`https://wa.me/79001234567?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnSecondary}
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Краткое описание */}
        <section className={styles.section}>
          <h2>Что вас ждёт</h2>
          <p className={styles.shortDesc}>{tour.shortDescription}</p>
        </section>

        {/* Программа маршрута */}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <section className={styles.section}>
            <h2>Программа маршрута</h2>
            <div className={styles.itinerary}>
              {tour.itinerary.map((step, index) => (
                <div key={index} className={styles.itineraryStep}>
                  <div className={styles.itineraryTime}>
                    <span className={styles.itineraryTimeIcon}>🕐</span>
                    <span>{step.time}</span>
                  </div>
                  <div className={styles.itineraryContent}>
                    <h3 className={styles.itineraryTitle}>{step.title}</h3>
                    <p className={styles.itineraryDesc}>{step.desc}</p>
                  </div>
                  {index < tour.itinerary.length - 1 && (
                    <div className={styles.itineraryLine}></div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Что включено / Не включено */}
        {(tour.included.length > 0 || tour.notIncluded.length > 0) && (
          <section className={styles.section}>
            <h2>Условия участия</h2>
            <div className={styles.includedGrid}>
              {tour.included.length > 0 && (
                <div className={styles.includedBlock}>
                  <h3 className={styles.includedTitle}>
                    <span className={styles.includedIcon}>✓</span>
                    Включено
                  </h3>
                  <ul className={styles.includedList}>
                    {tour.included.map((item, i) => (
                      <li key={i} className={styles.includedItem}>
                        <span className={styles.includedCheck}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tour.notIncluded.length > 0 && (
                <div className={styles.includedBlock}>
                  <h3 className={styles.includedTitle}>
                    <span className={styles.includedIcon}>—</span>
                    Не включено
                  </h3>
                  <ul className={styles.includedList}>
                    {tour.notIncluded.map((item, i) => (
                      <li key={i} className={styles.includedItem}>
                        <span className={styles.includedDash}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Важная информация */}
        {tour.importantInfo && tour.importantInfo.length > 0 && (
          <section className={styles.section}>
            <h2>Важная информация</h2>
            <div className={styles.importantGrid}>
              {tour.importantInfo.map((info, index) => (
                <div key={index} className={styles.importantItem}>
                  <span className={styles.importantLabel}>{info.label}</span>
                  <span className={styles.importantValue}>{info.value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Детали */}
        <section className={styles.section}>
          <h2>Детали экскурсии</h2>
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Длительность</span>
              <span className={styles.detailValue}>{tour.duration}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Стоимость</span>
              <span className={styles.detailValue}>{tour.price}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Сезон</span>
              <span className={styles.detailValue}>{tour.season}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Категория</span>
              <span className={styles.detailValue}>{tour.categoryLabel}</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className={styles.ctaBlock}>
          <h3>Готовы отправиться в путешествие?</h3>
          <p>
            Свяжитесь со мной, чтобы обсудить детали и забронировать экскурсию
          </p>
          <div className={styles.ctaActions}>
            <a
              href={`https://wa.me/79001234567?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnLarge}
            >
              Забронировать экскурсию
            </a>
            <a
              href={`https://wa.me/79001234567?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnSecondaryLarge}
            >
              Задать вопрос →
            </a>
          </div>
        </div>

        {/* Вам также может понравиться */}
        {relatedTours.length > 0 && (
          <section className={styles.relatedSection}>
            <h2>Вам также может понравиться</h2>
            <div className={styles.relatedGrid}>
              {relatedTours.map((related) => {
                const relatedImage =
                  imageMap[related.slug] ||
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
                return (
                  <Link
                    href={`/tour/${related.slug}`}
                    key={related.id}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedGradient}>
                      <img
                        src={relatedImage}
                        alt={related.title}
                        className={styles.relatedImg}
                      />
                    </div>
                    <div className={styles.relatedBody}>
                      <h3 className={styles.relatedTitle}>{related.title}</h3>
                      <p className={styles.relatedDesc}>
                        {related.description}
                      </p>
                      <span className={styles.relatedLink}>Подробнее →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
