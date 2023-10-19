"use client";
import "@ukho/admiralty-core/styles/core.css";
import "./globals.css";
import { AdmiraltyHeader, AdmiraltyHeaderMenuItem } from "@ukho/admiralty-react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <AdmiraltyHeader
          headerTitle="Design System"
          logoImgUrl="/svg/Admiralty stacked logo.svg"
          onTitledClicked={() => router.push("/")}>
          <AdmiraltyHeaderMenuItem
            menuTitle="Prinicples"
            slot="items"
            onMenuItemClick={() => router.push("/principles")}></AdmiraltyHeaderMenuItem>
        </AdmiraltyHeader>
        {children}
      </body>
    </html>
  );
}
