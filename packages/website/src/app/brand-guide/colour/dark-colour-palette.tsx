import ColourPaletteItem from "@/components/colour-palette-item/colour-palette-item";
import styles from "./styles.module.css";

export default function DarkColourPalette() {
  return (
    <div className={styles.colourPaletteContainer}>
      <ColourPaletteItem name="Primary" colourHex="#FFFFFF" />
      <ColourPaletteItem name="Secondary" colourHex="#405357" />
      <ColourPaletteItem name="Tertiary" colourHex="#92A9AE" />
    </div>
  )
}