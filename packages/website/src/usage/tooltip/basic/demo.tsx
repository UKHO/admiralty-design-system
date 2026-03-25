import React from "react";
import { AdmiraltyButton, AdmiraltyTooltip } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div>
      <AdmiraltyButton id="myButton">Hover over me</AdmiraltyButton>
      <AdmiraltyTooltip for="myButton">Tooltip description</AdmiraltyTooltip>
    </div>
  );
}
