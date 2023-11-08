"use client";
import { AdmiraltySideNav, AdmiraltySideNavItem } from "@ukho/admiralty-react";
import React, { useEffect, useRef, useState } from "react";
import "./docs.css";
import { AdmiraltySideNavItemCustomEvent } from "@ukho/admiralty-core";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sideNavRef = useRef<HTMLAdmiraltySideNavElement>(null);
  const router = useRouter();

  const [activeSideNavId, setactiveSideNavId] = useState<string>("");
  useEffect(() => {
    if (activeSideNavId) {
      const sideNavItems = sideNavRef.current?.querySelectorAll("admiralty-side-nav-item");
      sideNavItems?.forEach((sideNavItem) => {
        sideNavItem.navActive = sideNavItem.sideNavItemId === activeSideNavId;
        router.push(`/components/${activeSideNavId}`);
      });
    }
  }, [activeSideNavId, router]);

  const onSideNavItemSelected = (event: AdmiraltySideNavItemCustomEvent<string>) => {
    const sideNavItemId: string = event.detail;
    setactiveSideNavId(sideNavItemId);
  };

  return (
    <div className="content-container">
      <div className="side-menu">
        <AdmiraltySideNav ref={sideNavRef}>
          <AdmiraltySideNavItem
            onSideNavItemSelected={onSideNavItemSelected}
            sideNavItemId="/"
            headingTitle="Overview"></AdmiraltySideNavItem>
          <AdmiraltySideNavItem
            onSideNavItemSelected={onSideNavItemSelected}
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
