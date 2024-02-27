import React from "react";
import { AdmiraltyTab, AdmiraltyTabGroup } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyTabGroup selected-index="1">
      <AdmiraltyTab label="First header">test a</AdmiraltyTab>
      <AdmiraltyTab label="Second header"><b>test b</b></AdmiraltyTab>
    </AdmiraltyTabGroup>
  );
}
