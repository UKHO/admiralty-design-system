import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup label="Where do you live?" hint="Select the country you currently live in" value="england">
      <AdmiraltyRadio name="labelled" value="england">
        England
      </AdmiraltyRadio>
      <AdmiraltyRadio name="labelled" value="scotland">
        Scotland
      </AdmiraltyRadio>
      <AdmiraltyRadio name="labelled" value="wales">
        Wales
      </AdmiraltyRadio>
      <AdmiraltyRadio name="labelled" value="northern ireland">
        Northern Ireland
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}

