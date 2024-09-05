import React from "react";
import { AdmiraltyColourBlock } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyColourBlock
      width={400}
      height={400}
      colour="admiralty-blue"
      heading="Setting it up"
      href="http://www.admiralty.co.uk"
      linkText="Get started"
      suppressRedirect={true}
      onColourBlockLinkClicked={() => alert("onColourBlockLinkClicked event")}>
      <p>Go to Get Started to see how to install the Design System and start using it in your builds.</p>
    </AdmiraltyColourBlock>
  );
}

