import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup
      label="Where do you live?"
      hint="Select the country you currently live in"
      value="england"
      disabled={true}>
      <AdmiraltyRadio name="disabled" value="england">
        England
      </AdmiraltyRadio>
      <AdmiraltyRadio name="disabled" value="scotland">
        Scotland
      </AdmiraltyRadio>
      <AdmiraltyRadio name="disabled" value="wales">
        Wales
      </AdmiraltyRadio>
      <AdmiraltyRadio name="disabled" value="northern ireland">
        Northern Ireland
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}

