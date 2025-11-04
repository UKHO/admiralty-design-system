import styles from "./styles.module.css";
import {
  AdmiraltyTable, AdmiraltyTableBody, AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react/dist";

export default function ColourPaletteVariables() {
  return (
    <div>
      <AdmiraltyTable caption="Primary Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#09315b' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-primary</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#09315b</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(9,49,91)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#09315b' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-primary-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#09315b</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(9,49,91)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-primary-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255 255 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-primary-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255 255 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#082b50' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-primary-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#082b50</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(8 43 80)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#22466b' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-primary-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#082b50</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>	rgb(34, 70, 107)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Secondary Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#007e97' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-secondary</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#007e97</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 126, 151)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#007e97' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-secondary-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#007e97</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 126, 151)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-secondary-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255 255 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-secondary-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255 255 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#006f85' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-secondary-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#082b50</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 111, 133)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#1a8ba1' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-secondary-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#1a8ba1</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(26, 139, 161)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Tertiary Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#65c4db' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-tertiary</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#65c4db</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(101, 196, 219)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#65c4db' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-tertiary-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#007e97</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(101, 196, 219)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-tertiary-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-tertiary-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#59acc1' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-tertiary-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#59acc1</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(89, 172, 193)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#74cadf' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-tertiary-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#74cadf</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(116, 202, 223)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Success Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#47a234' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#47a234</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(71, 162, 52)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#47a234' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#47a234</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(71, 162, 52)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#3e8f2e' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#3e8f2e</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(62, 143, 46)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#59ab48' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#59ab48</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(89, 171, 72)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e7f1e5' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-success-background</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e7f1e5</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(231, 241, 229)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Warning Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e3660e' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e3660e</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(227, 102, 14)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e3660e' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e3660e</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(227, 102, 14)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#c85a0c' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#c85a0c</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(200, 90, 12)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e67526' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e67526</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(230, 117, 38)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#f8ede3' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-warning-background</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#f8ede3</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(248, 237, 227)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Danger Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e20d0d' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e20d0d</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(226, 13, 13)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e20d0d' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e20d0d</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(226, 13, 13)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255, 255, 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255, 255, 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#c70b0b' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#c70b0b</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(199, 11, 11)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e52525' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e52525</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(229, 37, 37)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#f7e1e1' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-danger-background</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#f7e1e1</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(247, 225, 225)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Info Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#0177c1' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#0177c1</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(1, 119, 193)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#0177c1' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#0177c1</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(1, 119, 193)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255, 255, 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255, 255, 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#0169aa' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#0169aa</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(1, 105, 170)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#1a85c7' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#1a85c7</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(26, 133, 199)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#e0ecf3' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-info-background</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#e0ecf3</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(224, 236, 243)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Light Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#d8d8d8' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-light</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#d8d8d8</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(216, 216, 216)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#d8d8d8' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-light-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#d8d8d8</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(216, 216, 216)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-light-contrast</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-light-contrast-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#bebebe' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-light-shade</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#bebebe</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(190, 190, 190)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#1a85c7' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-colour-light-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#1a85c7</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(26, 133, 199)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Background Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffffff' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-background-colour</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffffff</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255, 255, 255)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#000000' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-background-colour-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#000000</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(0, 0, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#eeeeee' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-hover-background-colour</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#eeeeee</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(238, 238, 238)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#eeeeee' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-hover-background-colour-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#eeeeee</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(238, 238, 238)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Background Tint Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#eeeeee' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-background-colour-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#eeeeee</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(238, 238, 238)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#eeeeee' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-background-colour-tint-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#eeeeee</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(238, 238, 238)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#d0d0d0' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-hover-background-colour-tint</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#d0d0d0</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(238, 238, 238)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#d0d0d0' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-hover-background-colour-tint-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#d0d0d0</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(238, 238, 238)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Text Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#333333' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-text-colour</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#333333</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(51, 51, 51)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#333333' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-text-colour-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#333333</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(51, 51, 51)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Focus Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#333333' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-text-colour</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#333333</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(51, 51, 51)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#ffdd00' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-focus-colour-rgb</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#ffdd00</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(255, 221, 0)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>

      <AdmiraltyTable caption="Disabled Colours" className={styles.colourPaletteContainer}>
        <AdmiraltyTableHeader>
          <AdmiraltyTableRow>
            <AdmiraltyTableHeaderCell>Colour</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>CSS Variable</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>Hex</AdmiraltyTableHeaderCell>
            <AdmiraltyTableHeaderCell>RGB</AdmiraltyTableHeaderCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableHeader>
        <AdmiraltyTableBody>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#adadad' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-text-colour</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#adadad</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(173, 173, 173)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
          <AdmiraltyTableRow>
            <AdmiraltyTableCell>
              <span className={styles.colourSwatch} style={{ backgroundColor: '#757575' }}></span>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>--admiralty-disabled-text-colour</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>#757575</code>
            </AdmiraltyTableCell>
            <AdmiraltyTableCell className={styles.cell}>
              <code>rgb(117, 117, 117)</code>
            </AdmiraltyTableCell>
          </AdmiraltyTableRow>
        </AdmiraltyTableBody>
      </AdmiraltyTable>
    </div>
  );
}
