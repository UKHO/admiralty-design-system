import React from "react";
import { AdmiraltySelect } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltySelect label="Do you like the design system?" disabled={true}>
      <option>Yes</option>
      <option>No</option>
    </AdmiraltySelect>
  );
}
