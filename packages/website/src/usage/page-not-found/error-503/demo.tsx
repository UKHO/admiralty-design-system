import React from "react";
import { AdmiraltyHeader, AdmiraltyFooter, AdmiraltyLink } from "@ukho/admiralty-react";
import {  } from "@ukho/admiralty-core/storybook-static/components/admiralty-header";


export default function Demo() {
  return (
    <>
      <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/UKHO linear logo.svg"></AdmiraltyHeader>
      <div>
        <h1>Sorry, the service is unavailable</h1>
        <p>You will be able to use the service from 9am on Monday 27th June 2024</p>
        <p>
          <a href="#"><strong>Contact Customer Services</strong></a> if you need to speak to someone about submitting
          survey <br />
          data.
        </p>
      </div>
      <AdmiraltyFooter imageSrc="/svg/UKHO stacked logo.svg">
        <AdmiraltyLink href="http://www.example.com" new-tab="true">Privacy Policy</AdmiraltyLink>
        <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
      </AdmiraltyFooter>
    </>
  );
}

