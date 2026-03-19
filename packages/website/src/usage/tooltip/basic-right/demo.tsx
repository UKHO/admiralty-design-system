import React from "react";
import { AdmiraltyLabel, AdmiraltyTooltip } from "@ukho/admiralty-react/dist";

export default function Demo() {
  return (
    <div>
      <AdmiraltyLabel id="myButtonRight">Hover over this label</AdmiraltyLabel>
      <AdmiraltyTooltip for="myButtonRight" placement="right">
        Tooltip description
      </AdmiraltyTooltip>
    </div>
  )
}
