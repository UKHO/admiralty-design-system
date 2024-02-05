import React from "react";
import { AdmiraltySelect } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltySelect value="second" invalid={true} invalid-message="The colour must be green"  hint="Select an option from the list" label="Choose a colour">
      <option value="first">first</option>
      <option value="second">second</option>
      <option value="third">third</option>
    </AdmiraltySelect>
  );
}
