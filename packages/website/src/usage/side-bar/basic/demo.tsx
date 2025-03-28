import React, { useState } from "react";
import { AdmiraltySideBar, AdmiraltySideBarItem } from "@ukho/admiralty-react";

export default function Demo() {
  const [active, setActive] = useState("/bookmarks");
  // onSideBarItemClick
  const onClick = (e: CustomEvent) => setActive(e.detail);
  return (
    <div style={{ backgroundColor: "#ccc", display: "flex", height: "650px" }}>
      <AdmiraltySideBar label="Application navigation" logoImgUrl="/svg/UKHO%20crest.svg">
        <AdmiraltySideBarItem
          onSideBarItemClick={onClick}
          active={active === "/contents"}
          href="/contents"
          suppressRedirect={true}
          icon="list-alt-outline">
          Contents
        </AdmiraltySideBarItem>
        <AdmiraltySideBarItem
          onSideBarItemClick={onClick}
          active={active === "/bookmarks"}
          href="/bookmarks"
          suppressRedirect={true}
          icon="bookmark-outline">
          Bookmarks
        </AdmiraltySideBarItem>
        <AdmiraltySideBarItem
          onSideBarItemClick={onClick}
          active={active === "/recents"}
          href="/recents"
          suppressRedirect={true}
          icon="history">
          Recents
        </AdmiraltySideBarItem>
        <AdmiraltySideBarItem
          onSideBarItemClick={onClick}
          active={active === "/update"}
          href="/update"
          suppressRedirect={true}
          icon="download-for-offline-outline"
          slot="footer">
          Update
        </AdmiraltySideBarItem>
        <AdmiraltySideBarItem
          onSideBarItemClick={onClick}
          active={active === "/settings"}
          href="/settings"
          suppressRedirect={true}
          icon="settings-outline"
          slot="footer">
          Settings
        </AdmiraltySideBarItem>
      </AdmiraltySideBar>
    </div>
  );
}
