"use client";
import React from "react";
import styles from "./styles.module.css";
import SideNav, { SideNavItem } from "@/components/side-nav/side-nav";

const sideNavItems: SideNavItem[] = [
  { path: "/", title: "Overview" },
  { path: "breadcrumbs", title: "Breadcrumbs" },
  { path: "button", title: "Button" },
  { path: "card", title: "Card" },
  { path: "checkbox", title: "Checkbox" },
  { path: "colour-block", title: "Colour Block" },
  { path: "header", title: "Header" },
  { path: "footer", title: "Footer" },
  { path: "paginator", title: "Paginator" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/components" items={sideNavItems} />
      <div>{children}</div>
    </div>
  );
}

