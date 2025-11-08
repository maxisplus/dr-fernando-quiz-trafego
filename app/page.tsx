import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <section className={styles.card}>
        <p className={styles.badge}>Programa Dr. Fernando</p>
        <h1 className={styles.title}>Descubra o que está travando o seu emagrecimento</h1>
        <p className={styles.subtitle}>
          Rode testes A/B com variações de copy específicas e direcione suas pacientes para o diagnóstico correto em um
          único fluxo de quiz.
        </p>
        <div className={styles.actions}>
          <Link href="/a" className={styles.primaryButton}>
            Abrir variação A
          </Link>
          <Link href="/c" className={styles.secondaryButton}>
            Teste frio com variação C
          </Link>
        </div>
        <ul className={styles.list}>
          <li>6 variações de página para tráfego segmentado</li>
          <li>Fluxo único de quiz com diagnósticos TRÍADE ou Lipedema</li>
          <li>UTM automática para rastrear conversões</li>
        </ul>
      </section>
    </main>
  );
}

