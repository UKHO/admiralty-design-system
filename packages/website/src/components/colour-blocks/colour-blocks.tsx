import { AdmiraltyColourBlock } from "@ukho/admiralty-react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function ColourBlocks() {
  const router = useRouter();
  return (
    <div className={styles.colourBlocksContainer}>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="admiralty-blue"
        heading="Setting it up"
        linkText="Get started"
        href="#"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => alert("Coming soon")}>
        Go to Get Started to see how to install the Design System and start using it in your builds.
      </AdmiraltyColourBlock>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="teal"
        heading="How we do things"
        linkText="Principles"
        href="/principles"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/principles")}>
        Our Principles section covers our approach to accessibility, design, research and content
      </AdmiraltyColourBlock>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="bright-blue"
        heading="Component examples"
        linkText="Components"
        href="/components"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/components")}>
        Visit Components to see examples, usage and accessibility requirements and get the code
      </AdmiraltyColourBlock>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="teal"
        heading="Support user needs"
        linkText="Patterns"
        href="#"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => alert("Coming soon")}>
        Patterns have been developed to meet a user need - such as ‘find a location’ or ‘complete a form’
      </AdmiraltyColourBlock>
      <AdmiraltyColourBlock
        width={434}
        height={434}
        colour="bright-blue"
        heading="Build ‘on brand’"
        linkText="Brand guide"
        href="/brand-guide"
        suppressRedirect={true}
        enableCardEvent={true}
        onColourBlockLinkClicked={() => router.push("/brand-guide")}>
        The Design System helps teams develop products in the ADMIRALTY brand
      </AdmiraltyColourBlock>
    </div>
  );
}

