import Image from "next/image";

export default function AnatomyImages() {
  return (
    <div style={{ display: "flex", gap: '10rem'}}>
      <Image src="/svg/Supporting-info.svg" width={500} height={600} alt="UKHO Logo" />
      <Image src="/svg/Thank-you-page.svg" width={500} height={380} alt="UKHO Logo" />
    </div>
  );
}
