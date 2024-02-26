import ColourPaletteItem from "@/components/colour-palette-item/colour-palette-item";
import styles from "./styles.module.css";
export default function PrimaryColourPalette() {
  return (
    <div className={styles.colourPaletteContainer}>
      <ColourPaletteItem name="Admiralty Blue" colourHex="#09315B" />
      <ColourPaletteItem name="Black" colourHex="#000000" />
      <ColourPaletteItem name="White" colourHex="#FFFFFF" />
    </div>
  );
}
