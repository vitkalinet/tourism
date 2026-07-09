"use client";

import { useEffect, useRef } from "react";

/**
 * Хук для анимации появления элемента при скролле.
 * Добавляет CSS-класс к элементу, когда он входит в viewport.
 *
 * @param visibleClass - имя CSS-класса для добавления (например, styles.visible)
 * @param threshold - порог видимости (0..1)
 */
export function useInView<T extends HTMLElement>(
  visibleClass: string,
  threshold = 0.1,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            observer.disconnect();
          }
        });
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [visibleClass, threshold]);

  return ref;
}
