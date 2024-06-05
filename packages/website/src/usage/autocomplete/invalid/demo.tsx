import React from "react";
import { AdmiraltyAutocomplete, AdmiraltyAutocompleteOption } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyAutocomplete
      name="favouritecolour"
      label="Favourite Colour"
      hint="Please enter your favourite colour"
      invalid={true}
      invalidMessage="Please enter a valid colour">
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
