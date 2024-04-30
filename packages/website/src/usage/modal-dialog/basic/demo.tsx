import React from "react";
import { AdmiraltyModalDialog, AdmiraltyIcon, AdmiraltyButton } from "@ukho/admiralty-react";
import { useFrame } from "react-frame-component";

export default function Demo() {
  useFrame();
  return (
    <AdmiraltyModalDialog heading="Do you want to leave this page?" show={true}>
      <div slot="content">
        <AdmiraltyIcon icon-name="triangle-exclamation" icon-prefix="fas"></AdmiraltyIcon>
        <div>If you leave this page, your survey won&apos;t be saved and can&apos;t be recovered</div>
      </div>
      <div slot="actions">
        <AdmiraltyButton variant="secondary">Leave page</AdmiraltyButton>
        <AdmiraltyButton>Continue survey</AdmiraltyButton>
      </div>
    </AdmiraltyModalDialog>
  );
}

