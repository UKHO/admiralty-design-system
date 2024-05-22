import React from "react";
import { AdmiraltyModalDialog, AdmiraltyIcon, AdmiraltyButton } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyModalDialog
      heading="Do you want to leave this page?"
      show={false}
      label="Do you want to leave this page?"
      description="If you leave this page, your survey won't be saved and can't be recovered">
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