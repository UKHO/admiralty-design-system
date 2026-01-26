import styles from "./styles.module.css"
import Image from "next/image";

export default function DataCollectionImages() {
  return (
    <div style={{ display: "flex", gap: '10rem'}}>
      <div className={styles.imageWrapper}>
        <Image src="/svg/Survey-details.svg" width={500} height={900} alt="UKHO Logo" />
      </div>
      <div className={styles.imageWrapper}>
        <Image src="/svg/Intellectual-property.svg" width={500} height={900} alt="UKHO Logo" />
      </div>
    </div>
  );
}
