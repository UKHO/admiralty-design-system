import React from "react";
import { AdmiraltyButton, AdmiraltyTooltip } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div>
      <AdmiraltyButton id="myButtonLeft">Hover over me</AdmiraltyButton>
      <AdmiraltyTooltip for="myButtonLeft" placement="left">
        Tooltip description
      </AdmiraltyTooltip>
    </div>
  );
}
