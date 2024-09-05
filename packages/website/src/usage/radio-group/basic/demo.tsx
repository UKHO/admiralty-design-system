import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup>
      <AdmiraltyRadio name="basic" value="exampleValue1">
        Option 1
      </AdmiraltyRadio>
      <AdmiraltyRadio name="basic" value="exampleValue2">
        Option 2
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}

