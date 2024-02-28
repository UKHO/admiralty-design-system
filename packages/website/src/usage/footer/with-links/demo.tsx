import React from "react";
import {AdmiraltyFooter, AdmiraltyLink} from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyFooter image-src="/svg/UKHO stacked logo.svg">
      <AdmiraltyLink href="http://www.example.com" new-tab="true">Privacy Policy</AdmiraltyLink>
      <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
    </AdmiraltyFooter>
  );
}
