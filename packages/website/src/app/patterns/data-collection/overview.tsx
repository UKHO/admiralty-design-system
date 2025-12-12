import Image from "next/image";

export default function DataCollectionImages() {
  return (
    <div style={{ display: "flex", gap: '10rem'}}>
      <Image src="/svg/Survey-details.svg" width={500} height={900} alt="UKHO Logo" />
      <Image src="/svg/Intellectual-property.svg" width={500} height={900} alt="UKHO Logo" />
    </div>
  );
}
