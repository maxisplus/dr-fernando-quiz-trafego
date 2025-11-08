'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import styles from './quiz.module.css';
import { getQuizVariation, QuizVariationKey } from './quizConfig';

interface QuizLayoutProps {
  variationKey: QuizVariationKey;
  children: ReactNode;
}

export function QuizLayout({ variationKey, children }: QuizLayoutProps) {
  const variation = getQuizVariation(variationKey);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentVar = searchParams?.get('var');
    if (typeof window === 'undefined') {
      return;
    }
    if (currentVar?.toUpperCase() === variation.utmValue.toUpperCase()) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    params.set('var', variation.utmValue);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [variation.utmValue, pathname, router, searchParams]);

  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.badge}>Teste 60 segundos</p>
          <h1 className={styles.headline}>{variation.headline}</h1>
          <p className={styles.subheadline}>{variation.subheadline}</p>
          <div className={styles.headerCta}>
            <a className={styles.primaryButton} href="#quiz" data-variation={variation.utmValue}>
              {variation.ctaLabel}
            </a>
          </div>
        </div>
      </section>
      <section id="quiz" className={styles.quizSection}>
        {children}
      </section>
    </main>
  );
}

