import React from "react";
import { AdmiraltyAutocomplete, AdmiraltyAutocompleteOption } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyAutocomplete
      label="Favourite colour"
      hint="Select a colour that you like the most"
      name="favouritecolour"
      loading={true}>
      <AdmiraltyAutocompleteOption value="red">Red</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="green">Green</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="blue">Blue</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="yellow">Yellow</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="purple">Purple</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="orange">Orange</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="black">Black</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="white">White</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="pink">Pink</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="brown">Brown</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="grey">Grey</AdmiraltyAutocompleteOption>
      <AdmiraltyAutocompleteOption value="cyan">Cyan</AdmiraltyAutocompleteOption>
    </AdmiraltyAutocomplete>
  );
}

