"use client";
import React from "react";
import styles from "./styles.module.css";
import SideNav, { SideNavItem } from "@/components/side-nav/side-nav";

const sideNavItems: SideNavItem[] = [
  { path: "/", title: "Overview" },
  { path: "button", title: "Button" },
  { path: "header", title: "Header" },
  { path: "footer", title: "Footer" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/components" items={sideNavItems} />
      <div>{children}</div>
    </div>
  );
}
