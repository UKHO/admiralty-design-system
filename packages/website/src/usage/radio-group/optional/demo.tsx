import { AdmiraltyRadioGroup, AdmiraltyRadio } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyRadioGroup label="Preferred contact method" allow-unselect="true">
      <AdmiraltyRadio name="optional-contact" value="email">
        Email
      </AdmiraltyRadio>
      <AdmiraltyRadio name="optional-contact" value="phone">
        Phone
      </AdmiraltyRadio>
      <AdmiraltyRadio name="optional-contact" value="post">
        Post
      </AdmiraltyRadio>
    </AdmiraltyRadioGroup>
  );
}
