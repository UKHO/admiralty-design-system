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
        <p>We released ADMIRALTY Design System update 5.0 on the 27th August 2025. This major update brings enhancements to typography, accessibility, and the website itself. It also introduces serveral new components, including a Pill, a Minified Footer, and new Icon Sidebar and Text Sidebar components.</p>
      </div>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="teal"
        heading="Help us improve our design system"
        linkText="Contact us"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/get-help/contact-us")}>
        Share your research or feedback on our github, propose a change or report a bug.
      </AdmiraltyColourBlock>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="bright-blue"
        heading="Figma kit"
        linkText="Use our Figma kit"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/components")}>
        Our Figma kits helps people create designs that are consistent with one another. They are maintained by the ADMIRALTY UKHO Design Team
      </AdmiraltyColourBlock>
    </div>
  );
}

