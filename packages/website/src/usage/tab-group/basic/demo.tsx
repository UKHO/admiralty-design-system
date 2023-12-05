import React from "react";
import { AdmiraltyTab, AdmiraltyTabGroup } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyTabGroup>
      <AdmiraltyTab label="All Warnings">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus in nulla vitae maximus.
      </AdmiraltyTab>
      <AdmiraltyTab label="NAVAREA 1">
        Duis tristique ultricies rhoncus. Fusce convallis iaculis leo, nec interdum diam interdum quis. Proin pretium
        viverra aliquet.
      </AdmiraltyTab>
      <AdmiraltyTab label="UK Coastal">Nulla euismod ante eget nunc viverra scelerisque vitae ac enim.</AdmiraltyTab>
      <AdmiraltyTab label="UK Estuary">
        Donec dictum diam in dapibus imperdiet. Suspendisse pharetra diam eros, imperdiet fringilla est aliquam id.
      </AdmiraltyTab>
      <AdmiraltyTab label="UK Swell">Nunc rutrum lacus metus, a auctor tortor hendrerit non.</AdmiraltyTab>
    </AdmiraltyTabGroup>
  );
}
