import React from "react";
import { AdmiraltySideNav, AdmiraltySideNavItem } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltySideNav label="Software Stage Menu">
      <AdmiraltySideNavItem
        side-nav-item-id="sideNavItemAlpha"
        heading-title="Alpha"
        nav-active="false"></AdmiraltySideNavItem>
      <AdmiraltySideNavItem
        side-nav-item-id="sideNavItemBeta"
        heading-title="Beta"
        nav-active="true"></AdmiraltySideNavItem>
      <AdmiraltySideNavItem
        side-nav-item-id="sideNavItemProduction"
        heading-title="Production"
        nav-active="false"></AdmiraltySideNavItem>
    </AdmiraltySideNav>
  );
}
