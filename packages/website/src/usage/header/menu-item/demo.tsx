import React from "react";
import {AdmiraltyHeader, AdmiraltyHeaderMenuItem, AdmiraltyHeaderSubMenuItem, AdmiraltyHeaderProfile} from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyHeader header-title="Design System" logo-img-url="/svg/Admiralty stacked logo.svg">
      <AdmiraltyHeaderMenuItem menu-title="Item 1" active={false} slot="items">
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 1"></AdmiraltyHeaderSubMenuItem>
        <AdmiraltyHeaderSubMenuItem menu-title="Super long sub navigation item for wrapping"></AdmiraltyHeaderSubMenuItem>
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 3"></AdmiraltyHeaderSubMenuItem>
      </AdmiraltyHeaderMenuItem>
      <AdmiraltyHeaderMenuItem menu-title="Components &amp; Patterns" active={false}  slot="items">
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 1"></AdmiraltyHeaderSubMenuItem>
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 2"></AdmiraltyHeaderSubMenuItem>
      </AdmiraltyHeaderMenuItem>
      <AdmiraltyHeaderMenuItem>
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 1"></AdmiraltyHeaderSubMenuItem>
      </AdmiraltyHeaderMenuItem>
      <AdmiraltyHeaderProfile is-signed-in={false} signed-in-text="Mr Admiral" slot="profile"></AdmiraltyHeaderProfile>
    </AdmiraltyHeader>
  );
}
