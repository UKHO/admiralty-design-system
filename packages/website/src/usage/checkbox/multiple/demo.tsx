import React from "react";
import { AdmiraltyCheckbox } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AdmiraltyCheckbox name="2023-checkbox" label-text="2023"></AdmiraltyCheckbox>
      <AdmiraltyCheckbox name="2022-checkbox" label-text="2022" checked={true}></AdmiraltyCheckbox>
      <AdmiraltyCheckbox name="2021-checkbox" label-text="2021"></AdmiraltyCheckbox>
    </div>
  );
}

