"use client";
import { AdmiraltySideNav, AdmiraltySideNavItem } from "@ukho/admiralty-react";
import React, { useRef } from "react";
import "./docs.css";
import { AdmiraltySideNavItemCustomEvent } from "@ukho/admiralty-core";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sideNavRef = useRef<HTMLAdmiraltySideNavElement>(null);
  const router = useRouter();

  const onSideNavItemSelected = (event: AdmiraltySideNavItemCustomEvent<string>) => {
    const sideNavItemId: string = event.detail;
    const sideNavItems = sideNavRef.current?.querySelectorAll("admiralty-side-nav-item");
    sideNavItems?.forEach((sideNavItem) => {
      sideNavItem.navActive = sideNavItem.sideNavItemId === sideNavItemId;
      router.push(sideNavItemId);
    });
  };

  return (
    <div className="content-container">
      <div className="side-menu">
        <AdmiraltySideNav ref={sideNavRef}>
          <AdmiraltySideNavItem
            onSideNavItemSelected={onSideNavItemSelected}
            navActive={true}
            sideNavItemId="button"
            headingTitle="Button"></AdmiraltySideNavItem>
          <AdmiraltySideNavItem
            onSideNavItemSelected={onSideNavItemSelected}
            sideNavItemId="header"
            headingTitle="Header"></AdmiraltySideNavItem>
          <AdmiraltySideNavItem
            onSideNavItemSelected={onSideNavItemSelected}
            sideNavItemId="footer"
            headingTitle="Footer"></AdmiraltySideNavItem>
        </AdmiraltySideNav>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
