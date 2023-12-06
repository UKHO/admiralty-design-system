import React from "react";
import { AdmiraltyDialogue } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyDialogue type="warning" heading="Check your application before submitting">
      Once you&apos;ve submitted the details of your application you won&apos;t be able to go back and change anything.
    </AdmiraltyDialogue>
  );
}
