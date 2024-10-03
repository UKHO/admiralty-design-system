import React, { useState } from "react";
import { AdmiraltyModalDialog, AdmiraltyIcon, AdmiraltyButton } from "@ukho/admiralty-react";

export default function Demo() {
  const [modalDialogShow, setModalDialogShow] = useState(false);
  function showModalDialog() {
    setModalDialogShow(true);
  }
  function hideModalDialog() {
    setModalDialogShow(false);
  }
  return (
    <div>
      <AdmiraltyButton onClick={showModalDialog}>Show Modal Dialog</AdmiraltyButton>
      <AdmiraltyModalDialog
        heading="Do you want to leave this page?"
        show={modalDialogShow}
        label="Do you want to leave this page?"
        description="If you leave this page, your survey won't be saved and can't be recovered">
        <div slot="content">
          <AdmiraltyIcon name="triangle-exclamation" icon-prefix="fas"></AdmiraltyIcon>
          <div>If you leave this page, your survey won&apos;t be saved and can&apos;t be recovered</div>
        </div>
        <div slot="actions">
          <AdmiraltyButton variant="secondary" onClick={hideModalDialog}>
            Leave page
          </AdmiraltyButton>
          <AdmiraltyButton onClick={hideModalDialog}>Continue survey</AdmiraltyButton>
        </div>
      </AdmiraltyModalDialog>
    </div>
  );
}

