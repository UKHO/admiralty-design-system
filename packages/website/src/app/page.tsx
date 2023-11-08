"use client";
import HomePage from "./home.mdx";
import styles from "./styles.module.css";
import ImageBanner from "@/components/image-banner/image-banner";

export default function Home() {
  return (
    <div>
      <div className="hero-image">
        <ImageBanner />
      </div>
      <div className={styles.contentContainer}>
        <HomePage />
      </div>
    </div>
  );
}
