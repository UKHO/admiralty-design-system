import React, { useState } from "react";
import { AdmiraltySideBar, AdmiraltySideBarItem } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div style={{ backgroundColor: "#ccc", display: "flex", height: "650px" }}>
      <AdmiraltySideBar label="Application navigation"
                        show-logo={true}
                        logoImgUrl="/svg/UKHO crest.svg"
                        side-bar-width="180px">
        <AdmiraltySideBarItem active={false}
                              href="/contents"
                              suppress-redirect={true}
                              slot="items"
                              icon="list-alt-outline"
                              item-text="Contents"></AdmiraltySideBarItem>
        <AdmiraltySideBarItem active={true}
                              href="/bookmarks"
                              suppress-redirect={true}
                              slot="items"
                              icon="bookmark-outline"
                              item-text="Bookmarks"></AdmiraltySideBarItem>
        <AdmiraltySideBarItem active={false}
                              href="/recents"
                              suppress-redirect={true}
                              slot="items"
                              icon="history"
                              item-text="Recents"></AdmiraltySideBarItem>
        <AdmiraltySideBarItem active={false}
                              href="/update"
                              suppress-redirect={true}
                              icon="download-for-offline-outline"
                              slot="footer"
                              item-text="Update"></AdmiraltySideBarItem>
        <AdmiraltySideBarItem active={false}
                              href="/settings"
                              suppress-redirect={true}
                              icon="settings-outline" slot="footer" item-text="Settings"></AdmiraltySideBarItem>
      </AdmiraltySideBar>
    </div>
  );
}
