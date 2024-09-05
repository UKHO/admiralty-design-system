import React from "react";
import { AdmiraltyColourBlock } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyColourBlock
      width={1000}
      height={400}
      colour="admiralty-blue"
      heading="What is a design system?"
      href="http://www.admiralty.co.uk"
      linkText="Find out more about design">
      <p>
        A design system is a comprehensive set of standards, guidelines, principles, and reusable components that guide
        the design and development of a product or brand.
      </p>
      <p>
        Design is <b>important</b> and you can find out <a href="http://www.admiralty.co.uk">why design is important</a>
        .
      </p>
      <h5>Types of design</h5>
      <p>There are many types of design.</p>
    </AdmiraltyColourBlock>
  );
}
