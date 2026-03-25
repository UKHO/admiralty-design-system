import React from "react";
import { AdmiraltyButton, AdmiraltyTooltip } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div>
      <AdmiraltyButton id="myButtonRich">Hover over me</AdmiraltyButton>
      <AdmiraltyTooltip for="myButtonRich" placement="bottom" alignment="centre">
        <div>
          <h3>Black Rock</h3>
          <p>Underwater/awash rock</p>
          <h6>Details</h6>
          <p>50°42&apos;.50N | °30&apos;.63W</p>
          <a>Covers and uncovers</a>
        </div>
      </AdmiraltyTooltip>
    </div>
  );
}
