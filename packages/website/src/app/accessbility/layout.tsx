import React from "react";
import styles from "../accessbility/styles.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <div>{children}</div>
    </div>
  );
}
