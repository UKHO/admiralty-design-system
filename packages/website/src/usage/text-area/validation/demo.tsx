import React from "react";
import { AdmiraltyTextarea } from "@ukho/admiralty-react";

export default function Demo() {
  return <AdmiraltyTextarea invalid={true} invalidMessage="This field is required" label="text"></AdmiraltyTextarea>;
}
