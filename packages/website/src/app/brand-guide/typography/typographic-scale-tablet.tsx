import styles from "./styles.module.css";
import {
  AdmiraltyTable, AdmiraltyTableBody, AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react/dist";

export default function TypographicScaleTablet() {
  return (
    <div className={styles.typographicScaleTable}>
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
              <h1 className={styles.h1MediumMobile}>Heading 1 - Medium</h1>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>42</AdmiraltyTableCell>
            <AdmiraltyTableCell>2.625</AdmiraltyTableCell>
            <AdmiraltyTableCell>54</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h2 className={styles.h2LargeMobile}>Heading 2 - Large</h2>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>30</AdmiraltyTableCell>
            <AdmiraltyTableCell>1.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>42</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h3 className={styles.h345LargeMobile}>Heading 3, 4, 5 - Large</h3>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>20</AdmiraltyTableCell>
            <AdmiraltyTableCell>1.25</AdmiraltyTableCell>
            <AdmiraltyTableCell>30</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h3 className={styles.h345MediumMobile}>Heading 3, 4, 5 - Medium</h3>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <h3 className={styles.h345SmallMobile}>Heading 3, 4, 5 - Small</h3>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <p className={styles.pLargeMobile}>Paragraph - Large</p>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <p className={styles.pSmallMobile}>Paragraph - Small</p>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <label className={styles.labelLargeMobile}>Label - Large</label>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <label className={styles.labelMediumMobile}>Label - Medium</label>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>
    </div>
  );
}
