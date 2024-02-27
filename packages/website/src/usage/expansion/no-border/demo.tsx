import React from "react";
import { AdmiraltyExpansion } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <React.Fragment>
    <AdmiraltyExpansion heading="Expansion Heading 1" expanded={false} align-heading-right={false} hide-border={true}>
      Some content for the expansion with no border
    </AdmiraltyExpansion>
    <AdmiraltyExpansion heading="Expansion Heading 2" expanded={false} align-heading-right={false} hide-border={true}>
      Some content for the expansion with no border
    </AdmiraltyExpansion>
    <AdmiraltyExpansion heading="Expansion Heading 3" expanded={false} align-heading-right={false} hide-border={true}>
      Some content for the expansion with no border
    </AdmiraltyExpansion>
    </React.Fragment>
  );
}
