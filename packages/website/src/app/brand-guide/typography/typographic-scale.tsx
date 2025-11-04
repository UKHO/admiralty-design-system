import styles from "./styles.module.css";

export default function TypographicScale() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3>Heading 1 - Large</h3>
        <h1 className={styles.h1Large}>The quick brown fox jumped over the lazy dog.</h1>
      </section>
      <section className={styles.section}>
        <h3>Heading 1 - Medium</h3>
        <h1 className={styles.h1Medium}>The quick brown fox jumped over the lazy dog.</h1>
      </section>
      <section className={styles.section}>
        <h3>Heading 1 - Small</h3>
        <h1 className={styles.h1Small}>The quick brown fox jumped over the lazy dog.</h1>
      </section>

      <section className={styles.section}>
        <h3>Heading 2 - Large</h3>
        <h2 className={styles.h2Large}>The quick brown fox jumped over the lazy dog.</h2>
      </section>
      <section className={styles.section}>
        <h3>Heading 2 - Medium</h3>
        <h2 className={styles.h2Medium}>The quick brown fox jumped over the lazy dog.</h2>
      </section>
      <section className={styles.section}>
        <h3>Heading 2 - Small</h3>
        <h2 className={styles.h2Small}>The quick brown fox jumped over the lazy dog.</h2>
      </section>

      <section className={styles.section}>
        <h3>Heading 3,4,5 - Large</h3>
        <h3 className={styles.h345Large}>The quick brown fox jumped over the lazy dog.</h3>
      </section>
      <section className={styles.section}>
        <h3>Heading 3,4,5 - Medium</h3>
        <h3 className={styles.h345Medium}>The quick brown fox jumped over the lazy dog.</h3>
      </section>
      <section className={styles.section}>
        <h3>Heading 3,4,5 - Small</h3>
        <h3 className={styles.h345Small}>The quick brown fox jumped over the lazy dog.</h3>
      </section>

      <section className={styles.section}>
        <h3>Label - Large</h3>
        <label className={styles.labelLarge}>The quick brown fox jumped over the lazy dog.</label>
      </section>
      <section className={styles.section}>
        <h3>Label - Medium</h3>
        <label className={styles.labelMedium}>The quick brown fox jumped over the lazy dog.</label>
      </section>
      <section className={styles.section}>
        <h3>Label - Small</h3>
        <label className={styles.labelSmall}>The quick brown fox jumped over the lazy dog.</label>
      </section>

      <section className={styles.section}>
        <h3 className={styles.pTitle}>Paragraph - Small</h3>
        <p className={styles.pLarge}>The quick brown fox jumped over the lazy dog.</p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.pTitle}>Paragraph - Medium</h3>
        <p className={styles.pMedium}>The quick brown fox jumped over the lazy dog.</p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.pTitle}>Paragraph - Large</h3>
        <p className={styles.pSmall}>The quick brown fox jumped over the lazy dog.</p>
      </section>
    </div>
  );
}
