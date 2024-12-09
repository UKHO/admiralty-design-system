import React from "react";
import { AdmiraltyHeader, AdmiraltyFooter, AdmiraltyLink } from "@ukho/admiralty-react";
import {  } from "@ukho/admiralty-core/storybook-static/components/admiralty-header";


export default function Demo() {
  return (
    <>
      <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/UKHO linear logo.svg"></AdmiraltyHeader>
      <div>
        <h1>This page cannot be found</h1>
        <p>It looks like the page you're looking for doesnt exist.</p>
        <p>
          <a href="#">
            <strong>Return to homepage</strong>
          </a>
        </p>
      </div>
      <AdmiraltyFooter imageSrc="/svg/UKHO stacked logo.svg">
        <AdmiraltyLink href="http://www.example.com" new-tab="true">Privacy Policy</AdmiraltyLink>
        <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
      </AdmiraltyFooter>
    </>
  );
}

