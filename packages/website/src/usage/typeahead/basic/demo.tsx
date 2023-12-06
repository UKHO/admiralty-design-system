import React from "react";
import { AdmiraltyTypeAhead, AdmiraltyTypeAheadItem } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyTypeAhead label="Favourite Animal?" hint="Please type your favourite animal from the list below">
      <AdmiraltyTypeAheadItem value="dog"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="cat"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="elephant"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="badger"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="donkey"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="horse"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="lion"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="ostrich"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="rabbit"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="tiger"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="guinea pig"></AdmiraltyTypeAheadItem>
    </AdmiraltyTypeAhead>
  );
}
