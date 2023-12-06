import React from "react";
import { AdmiraltyDialogue } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyDialogue type="error" heading="There&apos;s a problem">
      It looks like there might be a problem with our system. Please try again in a few minutes.
    </AdmiraltyDialogue>
  );
}
