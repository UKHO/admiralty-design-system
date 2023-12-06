import React from "react";
import {
  AdmiraltyTable,
  AdmiraltyTableBody,
  AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyTable caption="Favourite Foods">
      <AdmiraltyTableHeader>
        <AdmiraltyTableRow>
          <AdmiraltyTableHeaderCell>Name</AdmiraltyTableHeaderCell>
          <AdmiraltyTableHeaderCell>Age</AdmiraltyTableHeaderCell>
          <AdmiraltyTableHeaderCell>Other</AdmiraltyTableHeaderCell>
          <AdmiraltyTableHeaderCell>Favourite Food</AdmiraltyTableHeaderCell>
        </AdmiraltyTableRow>
      </AdmiraltyTableHeader>
      <AdmiraltyTableBody>
        <AdmiraltyTableRow>
          <AdmiraltyTableCell>Tom</AdmiraltyTableCell>
          <AdmiraltyTableCell>12</AdmiraltyTableCell>
          <AdmiraltyTableCell>Likes Bread</AdmiraltyTableCell>
          <AdmiraltyTableCell>Potatoes</AdmiraltyTableCell>
        </AdmiraltyTableRow>
        <AdmiraltyTableRow>
          <AdmiraltyTableCell>Thomas</AdmiraltyTableCell>
          <AdmiraltyTableCell>25</AdmiraltyTableCell>
          <AdmiraltyTableCell>Likes Lots Of Bread</AdmiraltyTableCell>
          <AdmiraltyTableCell>Potatoes</AdmiraltyTableCell>
        </AdmiraltyTableRow>
        <AdmiraltyTableRow>
          <AdmiraltyTableCell>Tommy</AdmiraltyTableCell>
          <AdmiraltyTableCell>1000</AdmiraltyTableCell>
          <AdmiraltyTableCell>Bread</AdmiraltyTableCell>
          <AdmiraltyTableCell>Potatoes</AdmiraltyTableCell>
        </AdmiraltyTableRow>
        <AdmiraltyTableRow>
          <AdmiraltyTableCell>This is super super long</AdmiraltyTableCell>
          <AdmiraltyTableCell>way longer than the rest of them</AdmiraltyTableCell>
          <AdmiraltyTableCell>Bread is the greatest food on earth and this text is a perfect length</AdmiraltyTableCell>
          <AdmiraltyTableCell>Potatoes</AdmiraltyTableCell>
        </AdmiraltyTableRow>
      </AdmiraltyTableBody>
    </AdmiraltyTable>
  );
}
