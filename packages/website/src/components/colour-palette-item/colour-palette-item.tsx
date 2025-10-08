import styles from "./styles.module.css";

export interface ColourPaletteItemProps {
  name: string;
  colourHex: string;
  variable?: string;
}

export default function ColourPaletteItem(props: ColourPaletteItemProps) {
  return (
    <div>
      <div className={styles.colourContainer} style={{ backgroundColor: props.colourHex }}></div>
      <h3>{props.name}</h3>
      <p className={styles.hexValue}>Hex: {props.colourHex}</p>
      {props.variable && <p className={styles.variable}>Variable: <code>{props.variable}</code></p>}
    </div>
  );
}
