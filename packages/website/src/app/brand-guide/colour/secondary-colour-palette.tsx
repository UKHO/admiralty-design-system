import ColourPaletteItem from "@/components/colour-palette-item/colour-palette-item";
import styles from "./styles.module.css";
export default function SecondaryColourPalette() {
  return (
    <div className={styles.colourPaletteContainer}>
      <ColourPaletteItem name="Teal" colourHex="#007e97" />
      <ColourPaletteItem name="Bright Blue" colourHex="#65c4db" />
      <ColourPaletteItem name="Green" colourHex="#989b00" />
    </div>
  );
}
