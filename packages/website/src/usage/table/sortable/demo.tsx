import React, { useMemo, useState } from "react";
import {
  AdmiraltyTable,
  AdmiraltyTableBody,
  AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react";

type SortDirection = "none" | "ascending" | "descending";

type TableRow = [string, string, string, string];

const INITIAL_ROWS: TableRow[] = [
  ["Tom", "12", "Likes Bread", "Potatoes"],
  ["Thomas", "25", "Likes Lots Of Bread", "Pizza"],
  ["Tommy", "1000", "Bread", "Potatoes"],
  ["Alice", "30", "Likes Cake", "Sushi"],
  ["Bob", "45", "Likes Nothing", "Chips"],
];

export default function Demo() {
  const [activeColumn, setActiveColumn] = useState<number | null>(null);
  const [activeDirection, setActiveDirection] = useState<SortDirection>("none");

  const rows = useMemo(() => {
    if (activeColumn === null || activeDirection === "none") {
      return INITIAL_ROWS;
    }

    const sorted = [...INITIAL_ROWS];
    sorted.sort((a, b) => {
      const left = a[activeColumn];
      const right = b[activeColumn];
      const comparison = left.localeCompare(right, undefined, { numeric: true });
      return activeDirection === "ascending" ? comparison : -comparison;
    });

    return sorted;
  }, [activeColumn, activeDirection]);

  const handleSortChange = (column: number) => (event: CustomEvent<{ direction: SortDirection }>) => {
    const direction = event.detail.direction;
    if (direction === "none") {
      setActiveColumn(null);
      setActiveDirection("none");
      return;
    }

    setActiveColumn(column);
    setActiveDirection(direction);
  };

  const getSortDirection = (column: number): SortDirection => (activeColumn === column ? activeDirection : "none");

  return (
    <AdmiraltyTable caption="Favourite Foods - sortable columns" allow-sorting="true">
      <AdmiraltyTableHeader>
        <AdmiraltyTableRow>
          <AdmiraltyTableHeaderCell
            sortable={true}
            sort-direction={getSortDirection(0)}
            onAdmiraltySortChange={handleSortChange(0)}>
            Name
          </AdmiraltyTableHeaderCell>
          <AdmiraltyTableHeaderCell
            sortable={true}
            sort-direction={getSortDirection(1)}
            onAdmiraltySortChange={handleSortChange(1)}>
            Age
          </AdmiraltyTableHeaderCell>
          <AdmiraltyTableHeaderCell
            sortable={true}
            sort-direction={getSortDirection(2)}
            onAdmiraltySortChange={handleSortChange(2)}>
            Other
          </AdmiraltyTableHeaderCell>
          <AdmiraltyTableHeaderCell
            sortable={true}
            sort-direction={getSortDirection(3)}
            onAdmiraltySortChange={handleSortChange(3)}>
            Favourite Food
          </AdmiraltyTableHeaderCell>
        </AdmiraltyTableRow>
      </AdmiraltyTableHeader>
      <AdmiraltyTableBody>
        {rows.map((row) => (
          <AdmiraltyTableRow key={`${row[0]}-${row[1]}`}>
            <AdmiraltyTableCell>{row[0]}</AdmiraltyTableCell>
            <AdmiraltyTableCell>{row[1]}</AdmiraltyTableCell>
            <AdmiraltyTableCell>{row[2]}</AdmiraltyTableCell>
            <AdmiraltyTableCell>{row[3]}</AdmiraltyTableCell>
          </AdmiraltyTableRow>
        ))}
      </AdmiraltyTableBody>
    </AdmiraltyTable>
  );
}
