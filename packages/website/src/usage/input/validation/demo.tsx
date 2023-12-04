import React from "react";
import { AdmiraltyInput } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyInput
      invalid={true}
      invalidMessage="This field is required"
      label="text"
      hint="You can add helpful instructions here"
      type="text"></AdmiraltyInput>
  );
}
