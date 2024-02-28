import React from "react";
import { AdmiraltyProgressBar } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyProgressBar error={true} progression={60}>
    </AdmiraltyProgressBar>
  );
}
