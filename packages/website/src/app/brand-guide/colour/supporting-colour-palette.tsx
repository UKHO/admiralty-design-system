import ColourPaletteItem from "@/components/colour-palette-item/colour-palette-item";
import styles from "./styles.module.css";
export default function SupportingColourPalette() {
  return (
    <div className={styles.colourPaletteContainer}>
      <ColourPaletteItem name="Text" colourHex="#333333" />
      <ColourPaletteItem name="Line Stroke" colourHex="#D0D0D0" />
      <ColourPaletteItem name="Background, Light Grey" colourHex="#EEEEEE" />
      <ColourPaletteItem name="Table Row" colourHex="#EEF3F4" />
    </div>
  );
}
