import React from "react";
import { AdmiraltyErrorSummary, AdmiraltyLink } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <>
      <AdmiraltyErrorSummary heading="There's a problem">
        <AdmiraltyLink href="#fullname-input">Enter your full name</AdmiraltyLink>
      </AdmiraltyErrorSummary>
    </>
  );
}

