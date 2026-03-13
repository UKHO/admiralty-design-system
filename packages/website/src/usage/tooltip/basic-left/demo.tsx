import React from "react";
import { AdmiraltyLabel, AdmiraltyTooltip } from "@ukho/admiralty-react/dist";

export default function Demo() {
  return (
    <div>
      <AdmiraltyLabel id="myButtonLeft">Hover over this label</AdmiraltyLabel>
      <AdmiraltyTooltip for="myButtonLeft" placement="left">
        Tooltip description
      </AdmiraltyTooltip>
    </div>
  )
}
