"use client";
import React from "react";
import styles from "./styles.module.css";
import SideNav, { SideNavItem } from "@/components/side-nav/side-nav";

const sideNavItems: SideNavItem[] = [
  { path: "/", title: "Overview" },
  { path: "accessibility", title: "Accessibility" },
  { path: "contentdesign", title: "Content Design" },
  { path: "design", title: "Design" },
  { path: "userresearch", title: "User Research" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/principles" items={sideNavItems} />
      <div>{children}</div>
    </div>
  );
}
