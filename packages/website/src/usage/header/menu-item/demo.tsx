import React, { useState } from "react";
import {
  AdmiraltyHeader,
  AdmiraltyHeaderMenuItem,
  AdmiraltyHeaderMenuLink,
  AdmiraltyHeaderSubMenuItem,
  AdmiraltyHeaderProfile,
} from "@ukho/admiralty-react";

export default function Demo() {
  const [active, setActive] = useState(0);
  return (
    <AdmiraltyHeader header-title="Design System" logo-img-url="/svg/Admiralty stacked logo.svg">
      <AdmiraltyHeaderMenuItem
        menu-title="Item 1"
        active={active === 0}
        slot="items"
        onMenuItemClick={() => setActive(0)}>
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 1"></AdmiraltyHeaderSubMenuItem>
        <AdmiraltyHeaderSubMenuItem menu-title="Super long sub navigation item for wrapping"></AdmiraltyHeaderSubMenuItem>
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 3"></AdmiraltyHeaderSubMenuItem>
      </AdmiraltyHeaderMenuItem>
      <AdmiraltyHeaderMenuLink
        menu-title="Item 2"
        active={active === 1}
        href="/components/header"
        suppress-redirect={true}
        slot="items"
        onMenuItemClick={() => setActive(1)}
      />
      <AdmiraltyHeaderMenuItem
        menu-title="Item 3"
        active={active === 2}
        slot="items"
        onMenuItemClick={() => setActive(2)}>
        <AdmiraltyHeaderSubMenuItem menu-title="sub item 1"></AdmiraltyHeaderSubMenuItem>
      </AdmiraltyHeaderMenuItem>
      <AdmiraltyHeaderProfile is-signed-in={false} signed-in-text="Mr Admiral" slot="profile"></AdmiraltyHeaderProfile>
    </AdmiraltyHeader>
  );
}

