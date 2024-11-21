"use client";
import React from "react";
import styles from "./styles.module.css";
import SideNav, { SideNavItem } from "@/components/side-nav/side-nav";

const sideNavItems: SideNavItem[] = [
  { path: "/", title: "Overview", },
  { path: "/service-unavailable", title: "Service Unavailable" },
  { path: "/page-not-found", title: "Page Not Found" },
  { path: "service-error", title: "Service Error" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentContainer}>
    <SideNav rootPath="/patterns" items={sideNavItems} />
    <div>{children}</div>
    </div>
  );
}
