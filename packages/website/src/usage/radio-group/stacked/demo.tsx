import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup displayVertical={true}>
      <AdmiraltyRadio name="exampleName1" value="exampleValue1">
        Option 1
      </AdmiraltyRadio>
      <AdmiraltyRadio name="exampleName2" value="exampleValue2">
        Option 2
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}
