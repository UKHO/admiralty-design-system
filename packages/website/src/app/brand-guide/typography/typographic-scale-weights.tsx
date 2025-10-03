import styles from "./styles.module.css";
import {
  AdmiraltyTable, AdmiraltyTableBody, AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react/dist";

export default function TypographicScaleWeights() {
  return (
    <div className={styles.borderTop}>
      <AdmiraltyTable>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Weight</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <code>--admiralty-font-weight-normal</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <code>--admiralty-font-weight-medium</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <code>--admiralty-font-weight-bold</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>700</AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>
    </div>
  );
}
