import styles from "./styles.module.css";
import "./typography.css"
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
            <AdmiraltyTableCell className="display-large-medium">Display - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>3.5</AdmiraltyTableCell>
            <AdmiraltyTableCell>56</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="display-large-normal">Display - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>44</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell className="display-medium-medium">Display - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>44</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="display-medium-normal">Display - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2.25</AdmiraltyTableCell>
            <AdmiraltyTableCell>36</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="display-small-normal">Display - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>2</AdmiraltyTableCell>
            <AdmiraltyTableCell>32</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="headline-large-normal">Headline - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>28</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="headline-medium-normal">Headline - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1.5</AdmiraltyTableCell>
            <AdmiraltyTableCell>24</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="headline-small-normal">Headline - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1.375</AdmiraltyTableCell>
            <AdmiraltyTableCell>22</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="title-large-medium">Title - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell className="title-medium-medium">Title - medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell className="title-small-medium">Title - small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell className="label-large-medium">Label - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell className="label-medium-medium">Label - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.688</AdmiraltyTableCell>
            <AdmiraltyTableCell>11</AdmiraltyTableCell>
            <AdmiraltyTableCell>400</AdmiraltyTableCell>
            <AdmiraltyTableCell className="label-small-medium">Label - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>1</AdmiraltyTableCell>
            <AdmiraltyTableCell>16</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="body-large-normal">Body - Large</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.875</AdmiraltyTableCell>
            <AdmiraltyTableCell>14</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="body-medium-normal">Body - Medium</AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>0.75</AdmiraltyTableCell>
            <AdmiraltyTableCell>12</AdmiraltyTableCell>
            <AdmiraltyTableCell>300</AdmiraltyTableCell>
            <AdmiraltyTableCell className="body-small-normal">Body - Small</AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>
    </div>
  );
}
