import React from "react";
import {
  AdmiraltyErrorSummary,
  AdmiraltyFileInput,
  AdmiraltyInput,
  AdmiraltyLink,
  AdmiraltyRadio,
  AdmiraltyRadioGroup,
  AdmiraltyTextarea,
} from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <>
      <AdmiraltyErrorSummary heading="There's a problem">
        <AdmiraltyLink href="#name">Enter your full name</AdmiraltyLink>
        <AdmiraltyLink href="#country">Select the country you live in</AdmiraltyLink>
        <AdmiraltyLink href="#description">Enter a description of the issue</AdmiraltyLink>
        <AdmiraltyLink href="#file-upload">Select the file that contains the issue</AdmiraltyLink>
      </AdmiraltyErrorSummary>
      <h2 style={{ margin: "24px" }}>Complaint summary</h2>
      <div style={{ margin: "0 24px", display: "flex", flexDirection: "column", gap: "36px" }}>
        <AdmiraltyInput
          identifier="name"
          name="name"
          label="What is your name?"
          hint="Enter your full name"
          type="text"
          invalid={true}
          invalid-message="Enter your full name"></AdmiraltyInput>
        <AdmiraltyRadioGroup
          name="country"
          label="Where do you live?"
          hint="Select the country you currently live in"
          value="other"
          invalid={true}
          invalidMessage="Select the country you live in">
          <AdmiraltyRadio identifier="country" name="country" value="england">
            England
          </AdmiraltyRadio>
          <AdmiraltyRadio identifier="country-2" name="country" value="scotland">
            Scotland
          </AdmiraltyRadio>
          <AdmiraltyRadio identifier="country-3" name="country" value="wales">
            Wales
          </AdmiraltyRadio>
          <AdmiraltyRadio identifier="country-4" name="country" value="northern ireland">
            Northern Ireland
          </AdmiraltyRadio>
        </AdmiraltyRadioGroup>
        <AdmiraltyTextarea
          identifier="description"
          label="What has happened?"
          hint="Enter a brief description of the issue"
          invalid={true}
          invalidMessage="Enter a description of the issue"></AdmiraltyTextarea>
        <AdmiraltyFileInput
          identifier="file-upload"
          invalid={true}
          invalidMessage="Select the file that contains the issue"></AdmiraltyFileInput>
      </div>
    </>
  );
}

