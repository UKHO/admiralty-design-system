import React from "react";
import { AdmiraltyDialogue } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyDialogue type="warning" heading="Check your application before submitting">
      Once you've submitted the details of your application you won't be able to go back and change anything.
    </AdmiraltyDialogue>
  );
}
