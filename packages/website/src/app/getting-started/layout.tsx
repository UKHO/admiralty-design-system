"use client";
import React from "react";
import styles from "./styles.module.css";
import SideNav, { SideNavItem } from "@/components/side-nav/side-nav";

const sideNavItems: SideNavItem[] = [
  { path: "/", title: "Overview" },
  { path: "javascript", title: "Javascript" },
  { path: "angular", title: "Angular" },
  { path: "react", title: "React" },
  { path: "customising-components", title: "Customising" },
  { path: "migrating", title: "Migrating" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/getting-started" items={sideNavItems} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

