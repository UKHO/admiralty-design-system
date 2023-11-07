"use client";
import HomePage from "./home.mdx";
import "./home.css";
import ImageBanner from "@/components/image-banner/image-banner";

export default function Home() {
  return (
    <div>
      <div className="hero-image">
        <ImageBanner />
      </div>
      <div className="content-container">
        <HomePage />
      </div>
    </div>
  );
}
