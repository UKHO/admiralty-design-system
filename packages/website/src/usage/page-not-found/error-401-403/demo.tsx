import React from "react";
import { AdmiraltyHeader, AdmiraltyFooter, AdmiraltyLink } from "@ukho/admiralty-react";
import {  } from "@ukho/admiralty-core/storybook-static/components/admiralty-header";


export default function Demo() {
  return (
    <>
      <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/UKHO linear logo.svg"></AdmiraltyHeader>
      <div>
        <article>
          <section>
            <h1>
              You do not have the necessary
              <br />
              permissions to view this page
            </h1>
          </section>
          <section>
            <p>
              Please <a href="#"><strong>log in again.</strong></a> If that does not work, contact Customer Services.
            </p>
            <p>
              Email:
              <a href="mailto:example.email@ukho.gov.uk">
                <strong>customerservices@ukho.gov.uk</strong>
              </a>
              <br />
              We aim to respond within two working days.
            </p>
          </section>
        </article>
      </div>
      <AdmiraltyFooter imageSrc="/svg/UKHO stacked logo.svg">
        <AdmiraltyLink href="http://www.example.com" new-tab="true">Privacy Policy</AdmiraltyLink>
        <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
      </AdmiraltyFooter>
    </>
  );
}

