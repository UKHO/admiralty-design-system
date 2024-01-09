"use client";
import "@ukho/admiralty-core/styles/core.css";
import "./globals.css";
import {
  AdmiraltyFooter,
  AdmiraltyHeader,
  AdmiraltyHeaderMenuItem,
  AdmiraltyLink,
  AdmiraltyPhaseBanner,
} from "@ukho/admiralty-react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <AdmiraltyHeader
          headerTitle="Design System"
          onTitledClicked={() => router.push("/")}
          logoImgUrl="/svg/Admiralty stacked logo.svg">
          <AdmiraltyHeaderMenuItem
            menuTitle="Principles"
            slot="items"
            onMenuItemClick={() => router.push("/principles")}></AdmiraltyHeaderMenuItem>
          <AdmiraltyHeaderMenuItem
            menuTitle="Components"
            slot="items"
            onMenuItemClick={() => router.push("/components")}></AdmiraltyHeaderMenuItem>
          <AdmiraltyHeaderMenuItem
            menuTitle="Brand Guide"
            slot="items"
            onMenuItemClick={() => router.push("/brand-guide")}></AdmiraltyHeaderMenuItem>
        </AdmiraltyHeader>
        <div>
          <AdmiraltyPhaseBanner
            phase="alpha"
            link="https://github.com/UKHO/admiralty-design-system/issues/new/choose"></AdmiraltyPhaseBanner>
        </div>
        <main>{children}</main>
        <AdmiraltyFooter imageSrc="/svg/UKHO stacked logo.svg">
          <AdmiraltyLink href="http://www.example.com" new-tab="true">
            Privacy Policy
          </AdmiraltyLink>
          <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
        </AdmiraltyFooter>
      </body>
    </html>
  );
}
