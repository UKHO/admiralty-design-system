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
  { path: "dialogue", title: "Dialogue" },
  { path: "expansion", title: "Expansion" },
  { path: "file-input", title: "File Input" },
  { path: "footer", title: "Footer" },
  { path: "header", title: "Header" },
  { path: "horizontal-rule", title: "Horizontal Rule" },
  { path: "input", title: "Input" },
  { path: "modal-dialog", title: "Modal Dialog" },
  { path: "paginator", title: "Paginator" },
  { path: "phase-banner", title: "Phase Banner" },
  { path: "progress-bar", title: "Progress Bar" },
  { path: "radio", title: "Radio" },
  { path: "radio-group", title: "Radio Group" },
  { path: "read-more", title: "Readmore" },
  { path: "select", title: "Select" },
  { path: "side-nav", title: "Side Nav" },
  { path: "skip-link", title: "Skip Link" },
  { path: "tab-group", title: "Tab Group" },
  { path: "table", title: "Table" },
  { path: "textarea", title: "Textarea" },
  { path: "type-ahead", title: "Typeahead" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
      <SideNav rootPath="/components" items={sideNavItems} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
