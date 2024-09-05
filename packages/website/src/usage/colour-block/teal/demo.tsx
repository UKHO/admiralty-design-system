import React from "react";
import { AdmiraltyColourBlock } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyColourBlock
      width={400}
      height={400}
      colour="teal"
      heading="Setting it up"
      href="http://www.admiralty.co.uk"
      linkText="Get started">
      <p>Go to Get Started to see how to install the Design System and start using it in your builds.</p>
    </AdmiraltyColourBlock>
  );
}
