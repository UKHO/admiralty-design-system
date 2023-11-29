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
  { path: "components", title: "Components" },
  { path: "dialogue", title: "Dialogue" },
  { path: "expansion", title: "Expansion" },
  { path: "file-input", title: "File Input" },
  { path: "footer", title: "Footer" },
  { path: "header", title: "Header" },
  { path: "paginator", title: "Paginator" },
  { path: "phase-banner", title: "Phase Banner" },
  { path: "progress-bar", title: "Progress Bar" },
]; // TODO: Figure out why Horizontal Rule isn't working

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/components" items={sideNavItems} />
      <div>{children}</div>
    </div>
  );
}

