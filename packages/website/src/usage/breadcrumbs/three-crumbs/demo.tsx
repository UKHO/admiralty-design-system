import React from "react";
import { AdmiraltyBreadcrumb } from "@ukho/admiralty-react";
import { AdmiraltyBreadcrumbs } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyBreadcrumbs>
      <AdmiraltyBreadcrumb href="https://example.org/home">Home</AdmiraltyBreadcrumb>
      <AdmiraltyBreadcrumb href="https://example.org/components" active={true}>
        Components
      </AdmiraltyBreadcrumb>
      <AdmiraltyBreadcrumb href="https://example.org/button">Button</AdmiraltyBreadcrumb>
    </AdmiraltyBreadcrumbs>
  );
}

