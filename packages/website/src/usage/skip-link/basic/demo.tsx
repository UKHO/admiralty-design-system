import React, { Fragment } from "react";
import { AdmiraltySkipLink } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <Fragment>
      <p>To view the skip link component tab to this example, or click inside this example and press tab.</p>
      <AdmiraltySkipLink href="#main-content"></AdmiraltySkipLink>
    </Fragment>
  );
}
