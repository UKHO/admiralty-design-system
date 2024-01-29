import React from "react";
import { AdmiraltyExpansion } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyExpansion> //TODO: Is there a better way to do this?
      <AdmiraltyExpansion heading="Expansion Heading" expanded="false" align-heading-right="false" hide-border="true">
        Some content for the expansion with no border
      </AdmiraltyExpansion>
      <AdmiraltyExpansion heading="Expansion Heading" expanded="false" align-heading-right="false" hide-border="true">
        Some content for the expansion with no border
      </AdmiraltyExpansion>
      <AdmiraltyExpansion heading="Expansion Heading" expanded="false" align-heading-right="false" hide-border="true">
        Some content for the expansion with no border
      </AdmiraltyExpansion>
    </AdmiraltyExpansion>);
}
