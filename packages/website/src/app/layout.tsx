"use client";
import "@ukho/admiralty-core/styles/admiralty.bundle.css";
import "./globals.css";
import {
  AdmiraltyFooter,
  AdmiraltyHeader,
  AdmiraltyHeaderMenuItem,
  AdmiraltyHeaderMenuLink,
  AdmiraltyLink,
  AdmiraltyPhaseBanner,
  AdmiraltySkipLink,
} from "@ukho/admiralty-react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Principles",
    path: "/principles",
  },
  {
    name: "Components",
    path: "/components",
  },
  {
    name: "Brand Guide",
    path: "/brand-guide",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <AdmiraltySkipLink href="#main-content"></AdmiraltySkipLink>
        <AdmiraltyHeader
          headerTitle="Design System"
          onTitledClicked={() => router.push("/")}
          logoImgUrl="/svg/Admiralty stacked logo.svg">
          {menuItems.map(({ name, path }) => (
            <AdmiraltyHeaderMenuLink
              key={path}
              href={path}
              active={pathname.startsWith(path)}
              suppressRedirect={true}
              slot="items"
              onMenuItemClick={() => router.push(path)}>
              {name}
            </AdmiraltyHeaderMenuLink>
          ))}
        </AdmiraltyHeader>
        <div>
          <AdmiraltyPhaseBanner
            phase="alpha"
            link="https://github.com/UKHO/admiralty-design-system/issues/new/choose"></AdmiraltyPhaseBanner>
        </div>
        <main id="main-content">{children}</main>
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

