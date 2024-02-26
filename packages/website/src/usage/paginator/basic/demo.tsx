import React from "react";
import { AdmiraltyPaginator } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyPaginator pages={2} currentPage={1} label="Showing 1-6 of 9">
    </AdmiraltyPaginator>
  );
}
