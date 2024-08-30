import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup label="Would you like to be contacted by phone?" value="true" display-vertical="false">
      <AdmiraltyRadio name="horizontal" value="true">
        Yes
      </AdmiraltyRadio>
      <AdmiraltyRadio name="horizontal" value="false">
        No
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}

