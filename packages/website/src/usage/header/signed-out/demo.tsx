import React from "react";
import { AdmiraltyHeader, AdmiraltyHeaderProfile } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/Admiralty stacked logo.svg">
      <AdmiraltyHeaderProfile slot="profile" is-signed-in={false}  signed-in-text="Mr Admiral" sign-in-only={false} ></AdmiraltyHeaderProfile>
    </AdmiraltyHeader>
  );
}
