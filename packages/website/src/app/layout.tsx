"use client";
import "@ukho/admiralty-core/styles/core.css";
import "./globals.css";
import { AdmiraltyFooter, AdmiraltyHeader, AdmiraltyLink, AdmiraltyPhaseBanner } from "@ukho/admiralty-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/Admiralty stacked logo.svg"></AdmiraltyHeader>
        <AdmiraltyPhaseBanner
          phase="alpha"
          link="https://github.com/UKHO/admiralty-design-system/issues/new/choose"></AdmiraltyPhaseBanner>
        <main>{children}</main>
        <AdmiraltyFooter>
          <AdmiraltyLink href="http://www.example.com" new-tab="true">
            Privacy Policy
          </AdmiraltyLink>
          <AdmiraltyLink href="http://www.example.com">Accessibility</AdmiraltyLink>
        </AdmiraltyFooter>
      </body>
    </html>
  );
}
