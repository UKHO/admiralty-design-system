import styles from "./styles.module.css";
import "@ukho/admiralty-core/themes/default.css";
import React from "react";
import {
  AdmiraltyTable,
  AdmiraltyTableBody,
  AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react";

export default function TypographicScale() {
  // @ts-ignore
  return (
    <div className={styles.container}>
      <AdmiraltyTable>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Rem</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>PX</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Weight</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Type</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>3.5</AdmiraltyTableCell>
            <AdmiraltyTableCell>56</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-7)'
            }}>Display - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>3.5</AdmiraltyTableCell>
            <AdmiraltyTableCell>56</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-7)'
            }}>Display - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>44</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-6)'
            }}>Display - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>44</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-6)'
            }}>Display - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2.25</AdmiraltyTableCell>
            <AdmiraltyTableCell>36</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-5)'
            }}>Display - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2</AdmiraltyTableCell>
            <AdmiraltyTableCell>32</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-4)'
            }}>Headline - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>28</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-3)'
            }}>Headline - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1.5</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-2)'
            }}>Headline - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1.375</AdmiraltyTableCell>
            <AdmiraltyTableCell>22</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-1)'
            }}>Title - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-0)'
            }}>Title - medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size--1)'
            }}>Title - small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size--1)'
            }}>Label - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size--2)'
            }}>Label - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.688</AdmiraltyTableCell>
            <AdmiraltyTableCell>11</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-medium)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size--3)'
            }}>Label - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size-0)'
            }}>Body - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size--1)'
            }}>Body - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell style={{
              '--admiralty-table-cell-font-weight': 'var(--admiralty-font-weight-normal)',
              '--admiralty-table-cell-font-size': 'var(--admiralty-font-size--2)'
            }}>Body - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>
    </div>
  );
}
