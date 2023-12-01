"use client";
import React from "react";
import styles from "./styles.module.css";
import SideNav, { SideNavItem } from "@/components/side-nav/side-nav";
import FeedbackDialog from "@/components/feedback-dialog/feedback-dialog";

const sideNavItems: SideNavItem[] = [
  { path: "/", title: "Overview" },
  { path: "typography", title: "Typography" },
  { path: "colour", title: "Colour" },
  { path: "images", title: "Images" },
  { path: "logos", title: "Logos" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/brand-guide" items={sideNavItems} />
      <div>{children}</div>
    </div>
  );
}
