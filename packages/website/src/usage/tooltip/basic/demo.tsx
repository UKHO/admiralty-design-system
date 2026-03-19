import React from "react";
import { AdmiraltyLabel, AdmiraltyTooltip } from "@ukho/admiralty-react/dist";

export default function Demo() {
  return (
    <div>
      <AdmiraltyLabel id="myButton">Hover over this label</AdmiraltyLabel>
      <AdmiraltyTooltip for="myButton">
        Tooltip description
      </AdmiraltyTooltip>
    </div>
  )
}
