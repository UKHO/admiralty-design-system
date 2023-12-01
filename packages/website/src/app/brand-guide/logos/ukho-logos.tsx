import styles from "./styles.module.css";
import Image from "next/image";

export default function UKHOLogos() {
  return (
    <div className={styles.container}>
      <Image src="/svg/UKHO linear logo.svg" width={300} height={200} alt="UKHO Logo" />
      <Image src="/svg/UKHO stacked logo.svg" width={300} height={200} alt="UKHO Logo" />
    </div>
  );
}
