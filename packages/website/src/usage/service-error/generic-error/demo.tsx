import React from "react";
import { AdmiraltyHeader, AdmiraltyFooter, AdmiraltyLink } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <>
      <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/UKHO linear logo.svg"></AdmiraltyHeader>
      <div>
        <h1>An error has occurred</h1>
        <p>We apologise for the inconvenience, but an error has occurred.</p>
        <p>
          Please <a href="#"><strong>return to the homepage</strong></a> and try again. If the issue persists, please contact <br/>
          Customer Services for further assistance.
        </p>
        <p>
          Email:
          <a href="mailto:example.email@ukho.gov.uk">
            <strong>customerservices@ukho.gov.uk</strong>
          </a>
          <br />
          We aim to respond within two working days.
        </p>
      </div>
      <AdmiraltyFooter imageSrc="/svg/UKHO stacked logo.svg">
        <AdmiraltyLink href="http://www.example.com" new-tab="true">Privacy Policy</AdmiraltyLink>
        <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
      </AdmiraltyFooter>
    </>
  );
}

