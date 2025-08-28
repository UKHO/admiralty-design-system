import { AdmiraltyColourBlock } from "@ukho/admiralty-react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function ColourBlocks() {
  const router = useRouter();
  return (
    <div className={styles.colourBlocksContainer}>
      <div className={styles.latestUpdates}>
        <h2>Updates</h2>
        <h3>Last Updated January 2025</h3>
        <p>We released ADMIRALTY Design System update 4.0.0.0 on the 21st January 2025. This new version contains updates to Typography, accessibility and the website. We have also added new components including a new pill component and the new minified footer.</p>
      </div>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="teal"
        heading="Help us improve our design system"
        linkText="Contact us"
        href="/principles"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/principles")}>
        Share your research or feedback on our github, propose a change or report a bug.
      </AdmiraltyColourBlock>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="bright-blue"
        heading="Figma kit"
        linkText="Use our Figma kit"
        href="/components"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/components")}>
        Our Figma kits helps people create designs that are consistent with one another. They are maintained by the ADMIRALTY UKHO Design Team
      </AdmiraltyColourBlock>
    </div>
  );
}

