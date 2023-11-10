import React from "react";
import { AdmiraltyBreadcrumb } from "@ukho/admiralty-react";
import { AdmiraltyBreadcrumbs } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyBreadcrumbs>
      <AdmiraltyBreadcrumb href="https://example.org/home" active={true}>
        Home
      </AdmiraltyBreadcrumb>
    </AdmiraltyBreadcrumbs>
  );
}

