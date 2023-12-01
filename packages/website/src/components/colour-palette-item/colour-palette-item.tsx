import styles from "./styles.module.css";

export interface ColourPaletteItemProps {
  name: string;
  colourHex: string;
}

export default function ColourPaletteItem(props: ColourPaletteItemProps) {
  return (
    <div>
      <div className={styles.colourContainer} style={{ backgroundColor: props.colourHex }}></div>
      <h3>{props.name}</h3>
      Hex: {props.colourHex}
    </div>
  );
}
