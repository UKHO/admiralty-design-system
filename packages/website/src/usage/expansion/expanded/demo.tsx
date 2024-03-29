import React from "react";
import { AdmiraltyExpansion } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyExpansion heading="Expansion Heading" expanded={true}>
      Some content for the expansion
    </AdmiraltyExpansion>
  );
}
