import React from "react";
import { AdmiraltyInput } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyInput
      label="text"
      hint="You can add helpful instructions here"
      placeholder="Please type.."
      type="text"></AdmiraltyInput>
  );
}
