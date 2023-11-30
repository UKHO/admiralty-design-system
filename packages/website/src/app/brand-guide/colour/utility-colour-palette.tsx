import ColourPaletteItem from "@/components/colour-palette-item/colour-palette-item";
import styles from "./styles.module.css";
export default function UtilityColourPalette() {
  return (
    <div className={styles.colourPaletteContainer}>
      <ColourPaletteItem name="Warning Background" colourHex="#F8EDE3" />
      <ColourPaletteItem name="Warning Accent" colourHex="#EF8123" />
      <ColourPaletteItem name="Error Background" colourHex="#F7E1E1" />
      <ColourPaletteItem name="Error Accent" colourHex="#E20D0D" />
      <ColourPaletteItem name="Success Background" colourHex="#E7F1E5" />
      <ColourPaletteItem name="Success Accent" colourHex="#4AAB37" />
      <ColourPaletteItem name="Information Background" colourHex="#E0ECF3" />
      <ColourPaletteItem name="Information Accent" colourHex="#0177C1" />
      <ColourPaletteItem name="Focus State" colourHex="#FFDD00" />
    </div>
  );
}
