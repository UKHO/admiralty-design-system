"use client";
import "@ukho/admiralty-core/styles/admiralty.bundle.css";
import "@ukho/admiralty-core/themes/default.css";
import "./globals.css";
import {
  AdmiraltyFooter,
  AdmiraltyHeader,
  AdmiraltyLink,
  AdmiraltyTextSideBar,
  AdmiraltyTextSideBarItem,
  AdmiraltySkipLink,
} from "@ukho/admiralty-react";
import { useRouter } from "next/navigation";
import { TextSideBarItemVariant } from "@ukho/admiralty-core";
import styles from "./styles.module.css";

const componentChildren: any[] = [
  { path: "/components/autocomplete", variant: "text", name: "Autocomplete" },
  { path: "/components/breadcrumbs", variant: "text", name: "Breadcrumbs" },
  { path: "/components/button", variant: "text", name: "Button" },
  { path: "/components/card", variant: "text", name: "Card" },
  { path: "/components/checkbox", variant: "text", name: "Checkbox" },
  { path: "/components/colour-block", variant: "text", name: "Colour Block" },
  { path: "/components/dialogue", variant: "text", name: "Dialogue" },
  { path: "/components/error-summary", variant: "text", name: "Error Summary" },
  { path: "/components/expansion", variant: "text", name: "Expansion" },
  { path: "/components/file-input", variant: "text", name: "File Input" },
  { path: "/components/footer", variant: "text", name: "Footer" },
  { path: "/components/header", variant: "text", name: "Header" },
  { path: "/components/horizontal-rule", variant: "text", name: "Horizontal Rule" },
  { path: "/components/icon-side-bar", variant: "text", name: "Icon Side Bar" },
  { path: "/components/input", variant: "text", name: "Input" },
  { path: "/components/link", variant: "text", name: "Link" },
  { path: "/components/modal-dialog", variant: "text", name: "Modal Dialog" },
  { path: "/components/paginator", variant: "text", name: "Paginator" },
  { path: "/components/phase-banner", variant: "text", name: "Phase Banner" },
  { path: "/components/pill", variant: "text", name: "Pill" },
  { path: "/components/progress-bar", variant: "text", name: "Progress Bar" },
  { path: "/components/radio", variant: "text", name: "Radio" },
  { path: "/components/radio-group", variant: "text", name: "Radio Group" },
  { path: "/components/read-more", variant: "text", name: "Readmore" },
  { path: "/components/select", variant: "text", name: "Select" },
  { path: "/components/side-nav", variant: "text", name: "Side Nav" },
  { path: "/components/skip-link", variant: "text", name: "Skip Link" },
  { path: "/components/tab-group", variant: "text", name: "Tab Group" },
  { path: "/components/table", variant: "text", name: "Table" },
  { path: "/components/textarea", variant: "text", name: "Textarea" },
  { path: "/components/text-side-bar", variant: "text", name: "Text Side Bar" },
];

const gettingStartedChildren: any[] = [
  { path: "/getting-started", variant: "text", name: "Overview" },
  { path: "/getting-started/javascript", variant: "text", name: "Javascript" },
  { path: "/getting-started/angular", variant: "text", name: "Angular" },
  { path: "/getting-started/react", variant: "text", name: "React" },
  { path: "/getting-started/customising-components", variant: "text", name: "Customising" },
  { path: "/getting-started/migrating", variant: "text", name: "Migrating" },
];

const principleChildren: any[] = [
  { path: "/principles/accessibility", variant: "text", name: "Accessibility" },
  { path: "/principles/contentdesign", variant: "text", name: "Content Design" },
  { path: "/principles/design", variant: "text", name: "Design" },
  { path: "/principles/userresearch", variant: "text", name: "User Research" },
];

const patternsChildren: any[] = [
  { name: "Overview", variant: "text", path: "/patterns" },
  { name: "Page Not Found", variant: "text", path: "/patterns/page-not-found" },
  { name: "Service Unavailable", variant: "text", path: "/patterns/service-unavailable" },
  { name: "Service Error", variant: "text", path: "/patterns/service-error" },
];

const brandChildren: any[] = [
  { name: "Typography", variant: "text", path: "/brand-guide/typography" },
  { name: "Colour", variant: "text", path: "/brand-guide/colour" },
  { name: "Images", variant: "text", path: "/brand-guide/images" },
  { name: "Logos", variant: "text", path: "/brand-guide/logos" },
];

const sideBarItems = [
  {
    name: "Getting Started",
    variant: "expandable",
    slot: "items",
    children: gettingStartedChildren,
  },
  {
    name: "Updates",
    variant: "expandable",
    slot: "items",
    children: [
      {
        name: "v5.0.0",
        variant: "text",
        path: "/updates/v5",
      },
    ],
  },
  {
    name: "Components",
    variant: "expandable",
    slot: "items",
    children: componentChildren,
  },
  {
    name: "Patterns",
    variant: "expandable",
    slot: "items",
    children: patternsChildren,
  },
  {
    name: "Build on brand",
    variant: "expandable",
    slot: "items",
    children: brandChildren,
  },
  {
    name: "Principles",
    variant: "expandable",
    slot: "items",
    children: principleChildren,
  },
  {
    name: "Get help",
    variant: "expandable",
    slot: "items",
    children: [
      {
        name: "Give feedback",
        variant: "text",
        path: "/get-help/improve-design-system",
      },
      {
        name: "Contact Us",
        variant: "text",
        path: "/get-help/contact-us",
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <div className={styles.pageWrapper}>
          <AdmiraltySkipLink href="#main-content"></AdmiraltySkipLink>
          <AdmiraltyHeader
            headerTitle="Design System"
            onTitledClicked={() => router.push("/")}
            logoImgUrl="/svg/Admiralty stacked logo.svg"></AdmiraltyHeader>
          <div className={styles.splitContentWrapper}>
            <div className={styles.middle}>
              <AdmiraltyTextSideBar className={styles.sideBar} textSideBarWidth="250px" showLogo={false}>
                {sideBarItems.map(({ name, variant, slot, children }) => (
                  <AdmiraltyTextSideBarItem
                    key={name}
                    suppress-redirect="true"
                    variant={variant as TextSideBarItemVariant}
                    slot={slot}
                    itemText={name}>
                    {children.map(({ name, variant, path }) => (
                      <AdmiraltyTextSideBarItem
                        key={name}
                        onTextSideBarItemClick={() => router.push(path)}
                        suppress-redirect="true"
                        variant={variant as TextSideBarItemVariant}
                        itemText={name}></AdmiraltyTextSideBarItem>
                    ))}
                  </AdmiraltyTextSideBarItem>
                ))}
              </AdmiraltyTextSideBar>
              <main className={styles.mainContent} id="main-content">
                {children}
              </main>
            </div>
            <div>
              <AdmiraltyFooter className={styles.pageFooter} imageSrc="/svg/UKHO linear logo.svg">
                <AdmiraltyLink href="https://www.admiralty.co.uk/privacy-policy" new-tab="true">
                  Privacy Policy
                </AdmiraltyLink>
                <AdmiraltyLink href="/accessbility">Accessibility</AdmiraltyLink>
              </AdmiraltyFooter>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
