import React from "react";
import {AdmiraltyCard, AdmiraltyTab, AdmiraltyTabGroup} from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyTabGroup>
    <AdmiraltyTab label="Heading A">
      <div style={{ margin: '5px' }}>
        <AdmiraltyCard heading="Title">You can put any html content in the body of a card. Such as <a href="#">links</a> or <b>bold text</b></AdmiraltyCard>
      </div>
    </AdmiraltyTab>
    <AdmiraltyTab label="Heading B"><b>test b</b></AdmiraltyTab>
  </AdmiraltyTabGroup>
  );
}
