import styles from "./styles.module.css";
import Image from "next/image";

export default function AdmiraltyLogos() {
  return (
    <div className={styles.container}>
      <Image src="/svg/Admiralty linear logo.svg" width={300} height={200} alt="Admiralty Logo" />
      <Image src="/svg/Admiralty stacked logo.svg" width={300} height={200} alt="Admiralty Logo" />
    </div>
  );
}
