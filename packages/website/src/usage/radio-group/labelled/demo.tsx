import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup display-vertical="true" value="false">
      <h3 id="group-label-boolean">Do you agree?</h3>
      <AdmiraltyRadio name="grp" value="true">Yes</AdmiraltyRadio>
      <AdmiraltyRadio name="grp" value="false">No</AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}
