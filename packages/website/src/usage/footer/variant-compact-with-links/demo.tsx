import React from "react";
import { AdmiraltyFooter, AdmiraltyLink } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div style={{ backgroundColor: "lightgrey", padding: '1rem' }}>
      <AdmiraltyFooter image-src="/svg/UKHO stacked logo.svg" variant="compact">
        <AdmiraltyLink href="http://www.example.com" new-tab="true">Privacy Policy</AdmiraltyLink>
        <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
      </AdmiraltyFooter>
    </div>
  );
}
