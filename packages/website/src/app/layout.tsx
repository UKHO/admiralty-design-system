"use client";
import "@ukho/admiralty-core/styles/core.css";
import "./globals.css";
import { AdmiraltyHeader } from "@ukho/admiralty-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdmiraltyHeader headerTitle="Design System" logoImgUrl="/svg/Admiralty stacked logo.svg"></AdmiraltyHeader>
        {children}
      </body>
    </html>
  );
}
