import React from "react";
import { AdmiraltyButton, AdmiraltyTooltip } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div>
      <AdmiraltyButton id="myButtonRight">Hover over me</AdmiraltyButton>
      <AdmiraltyTooltip for="myButtonRight" placement="right">
        Tooltip description
      </AdmiraltyTooltip>
    </div>
  );
}
