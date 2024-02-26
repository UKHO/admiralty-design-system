import React from "react";
import { AdmiraltyInput } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyInput
      disabled={true}
      label="text"
      hint="You can add helpful instructions here"
      type="text"></AdmiraltyInput>
  );
}
