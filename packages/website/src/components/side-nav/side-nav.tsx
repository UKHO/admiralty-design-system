import { AdmiraltySideNav, AdmiraltySideNavItem } from "@ukho/admiralty-react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AdmiraltySideNavItemCustomEvent } from "@ukho/admiralty-core";
import styles from "./styles.module.css";

export interface SideNavProps {
  rootPath: string;
  items: SideNavItem[];
}

export interface SideNavItem {
  path: string;
  title: string;
}

export default function SideNav(props: SideNavProps) {
  const sideNavRef = useRef<HTMLAdmiraltySideNavElement>(null);
  const router = useRouter();

  const [activeSideNavId, setactiveSideNavId] = useState<string>("");
  useEffect(() => {
    if (activeSideNavId) {
      const sideNavItems = sideNavRef.current?.querySelectorAll("admiralty-side-nav-item");
      sideNavItems?.forEach((sideNavItem) => {
        sideNavItem.navActive = sideNavItem.sideNavItemId === activeSideNavId;
        router.push(`${props.rootPath}/${activeSideNavId}`);
      });
    }
  }, [activeSideNavId, props.rootPath, router]);

  const onSideNavItemSelected = (event: CustomEvent<string>) => {
    const sideNavItemId: string = event.detail;
    setactiveSideNavId(sideNavItemId);
  };

  return (
    <div className={styles.sideMenu}>
      <AdmiraltySideNav ref={sideNavRef}>
        {props.items.map((item, i) => (
          <AdmiraltySideNavItem
            key={i}
            onSideNavItemSelected={onSideNavItemSelected}
            sideNavItemId={item.path}
            headingTitle={item.title}></AdmiraltySideNavItem>
        ))}
      </AdmiraltySideNav>
    </div>
  );
}
