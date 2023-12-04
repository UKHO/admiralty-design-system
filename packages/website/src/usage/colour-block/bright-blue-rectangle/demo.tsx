import React from "react";
import { AdmiraltyColourBlock } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyColourBlock
      width={1000}
      height={400}
      colour="bright-blue"
      heading="Example heading"
      actionText="Click Here"
      onColourBlockLinkClicked={() => alert("test")}>
      This rectangular colour block is a component in the design system and we hope you enjoy it.
    </AdmiraltyColourBlock>
  );
}

