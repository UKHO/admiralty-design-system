import React from "react";
import { AdmiraltyRadioGroup, AdmiraltyRadio, AdmiraltyTextarea } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup label="Type of observation" value="other">
      <AdmiraltyRadio name="conditional" value="visual">
        Visual
      </AdmiraltyRadio>
      <AdmiraltyRadio name="conditional" value="auditory">
        Auditory
      </AdmiraltyRadio>
      <AdmiraltyRadio name="conditional" value="other">
        Other
        <div slot="conditional">
          <AdmiraltyTextarea label="Provide more details" hint="Describe in detail how the observation was made" />
        </div>
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}

