import styles from "./styles.module.css";

export default function TypographicScale() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3>Heading 1</h3>
        <h1>The quick brown fox jumped over the lazy dog.</h1>
      </section>
      <section className={styles.section}>
        <h3>Heading 2</h3>
        <h2>The quick brown fox jumped over the lazy dog.</h2>
      </section>
      <section className={styles.section}>
        <h3>Heading 3,4,5</h3>
        <h3>The quick brown fox jumped over the lazy dog.</h3>
      </section>
      <section className={styles.section}>
        <h3>Heading 6</h3>
        <h6>The quick brown fox jumped over the lazy dog.</h6>
      </section>
      <section className={styles.section}>
        <h3>Intro Text</h3>
        <p className="intro">The quick brown fox jumped over the lazy dog.</p>
      </section>
      <section className={styles.section}>
        <h3>Paragraph</h3>
        <p>The quick brown fox jumped over the lazy dog.</p>
      </section>
      <section className={styles.section}>
        <h3>Small</h3>
        <p className="small">The quick brown fox jumped over the lazy dog.</p>
      </section>
      <section className={styles.section}>
        <h3>Link</h3>
        <a href="#">The quick brown fox jumped over the lazy dog.</a>
      </section>
      <section className={styles.section}>
        <h3>Block Quote</h3>
        <blockquote>The quick brown fox jumped over the lazy dog.</blockquote>
      </section>
      <section className={styles.section}>
        <h3>Bulleted List</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li>Dolore magna aliqua. Ut enim ad minim veniam.</li>
          <li>Commodo consequat duis aute irure dolor in.</li>
          <li>Labore et dolore magna aliqua occaecat.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Numbered List</h3>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li>Dolore magna aliqua. Ut enim ad minim veniam.</li>
          <li>Commodo consequat duis aute irure dolor in.</li>
          <li>Labore et dolore magna aliqua occaecat.</li>
        </ol>
      </section>
    </div>
  );
}
