import React from "react";
import { AdmiraltyHeader, AdmiraltyFooter, AdmiraltyLink } from "@ukho/admiralty-react";
import {  } from "@ukho/admiralty-core/storybook-static/components/admiralty-header";


export default function Demo() {
  return (
    <>
      <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/UKHO linear logo.svg"></AdmiraltyHeader>
      <div>
        <h1>
          Sorry, the service is unavailable
        </h1>
        <p>
          Try again later,
        </p>
        <p>
          Contact the Customer Services if you have any questions.
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

