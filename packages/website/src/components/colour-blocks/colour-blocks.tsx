import { AdmiraltyColourBlock } from "@ukho/admiralty-react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function ColourBlocks() {
  const router = useRouter();
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.latestUpdates}>
        <h2>Updates</h2>
        <h3>Last Updated February 2026</h3>
        <p>We released ADMIRALTY Design System version 5.3.0. This update introduces Dark Mode,
          improving usability in low-light environments and supporting user preference-based theming. It also launches a
          new Patterns section to help teams design more consistent and scalable services by providing guidance on
          common service structures, interaction behaviour, and layout approaches.</p></div>
      <div className={styles.colourBlocksContainer}>
        <AdmiraltyColourBlock
          width={434}
          height={434}
          colour="teal"
          heading="Help us improve our design system"
          actionText="Contact us"
          enableCardEvent={true}
          onColourBlockLinkClicked={() => router.push("/get-help/contact-us")}>
          Share your research or feedback on our github, propose a change or report a bug.
        </AdmiraltyColourBlock>
        <AdmiraltyColourBlock
          width={434}
          height={434}
          colour="bright-blue"
          heading="Figma kit"
          suppressRedirect={true}
          enableCardEvent={false}
          actionText="Coming soon"
          onColourBlockLinkClicked={() => router.push("#")}>
          Our Figma kits helps people create designs that are consistent with one another. They are maintained by the ADMIRALTY UKHO Design Team
        </AdmiraltyColourBlock>
      </div>
    </div>
  );
}

