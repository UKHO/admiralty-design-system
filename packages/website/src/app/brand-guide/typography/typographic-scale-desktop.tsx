import styles from "./styles.module.css";
import {
  AdmiraltyTable, AdmiraltyTableBody, AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react/dist";

export default function TypographicScaleDesktop() {
  return (
    <div className={styles.container}>
      <AdmiraltyTable>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell></AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Px</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Rem</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Line height</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Font weight</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h1 className={styles.h1Medium}>Heading 1 - Medium</h1>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>44</AdmiraltyTableCell>
            <AdmiraltyTableCell>2.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>52</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h2 className={styles.h2Large}>Heading 2 - Large</h2>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>32</AdmiraltyTableCell>
            <AdmiraltyTableCell>2</AdmiraltyTableCell>
            <AdmiraltyTableCell>40</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h3 className={styles.h345Large}>Heading 3, 4, 5 - Large</h3>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>22</AdmiraltyTableCell>
            <AdmiraltyTableCell>1.375</AdmiraltyTableCell>
            <AdmiraltyTableCell>28</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h3 className={styles.h345Medium}>Heading 3, 4, 5 - Medium</h3>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h3 className={styles.h345Small}>Heading 3, 4, 5 - Small</h3>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>20</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <p className={styles.pLarge}>Paragraph - Large</p>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <p className={styles.pSmall}>Paragraph - Small</p>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <label className={styles.labelLarge}>Label - Large</label>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>20</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <label className={styles.labelMedium}>Label - Medium</label>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>
    </div>
  );
}
