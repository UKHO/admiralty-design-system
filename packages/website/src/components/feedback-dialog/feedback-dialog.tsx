import styles from "./styles.module.css";
export default function FeedbackDialog() {
  return (
    <div className={styles.container}>
      <h3>Help improve this design system</h3>
      <p>To help make sure that this page is useful, relevant and up to date, you can:</p>
      <ul className={styles.noListStyle}>
        <li>
          <a href="https://github.com/UKHO/admiralty-design-system">share your research or feedback on GitHub</a>
        </li>
        <li>
          <a href="https://github.com/UKHO/admiralty-design-system/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=%5BFeature%5D">
            propose a change
          </a>
        </li>
        <li>
          <a href="https://github.com/UKHO/admiralty-design-system/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D">
            report a bug
          </a>
        </li>
      </ul>
      <p>
        If you’ve got a question about the admiralty.uk design system,{" "}
        <a href="https://github.com/UKHO/admiralty-design-system">contact the design system team.</a>
      </p>
    </div>
  );
}
