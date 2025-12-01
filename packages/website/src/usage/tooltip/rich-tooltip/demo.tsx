import React from "react";
import { AdmiraltyButton, AdmiraltyLabel, AdmiraltyTooltip } from "@ukho/admiralty-react/dist";

export default function Demo() {
  return (
    <div>
      <AdmiraltyLabel id="myButtonRich">Hover over this label</AdmiraltyLabel>
      <AdmiraltyTooltip for="myButtonRich" placement="${args.placement}" alignment="${args.alignment}">
        <AdmiraltyButton slot="trigger">submit</AdmiraltyButton>
        <div>
          <h3 style={{ margin: 0 }}>Black Rock</h3>
          <p>Underwater/awash rock</p>
          <h6 style={{ margin: 0 }}>Details</h6>
          <p style={{ margin: 0 }}>50°42'.50N | °30'.63W</p>
          <a>Covers and uncovers</a>
        </div>
      </AdmiraltyTooltip>
    </div>
  )
}
