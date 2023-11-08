"use client";
import "@ukho/admiralty-core/styles/core.css";
import "./globals.css";
import { AdmiraltyFooter, AdmiraltyHeader, AdmiraltyLink, AdmiraltyPhaseBanner } from "@ukho/admiralty-react";
import Konami from "react-konami-code";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState(Array<HTMLImageElement>);
  useEffect(() => {
    const snowflake1 = new Image();
    snowflake1.src = "/greg.webp";
    const snowflake2 = new Image();
    snowflake2.src = "/dave.webp";
    const snowflake3 = new Image();
    snowflake3.src = "/tom.webp";

    setImages([snowflake1, snowflake2, snowflake3]);
  },[]);

  return (
    <html lang="en">
      <body>
        <Konami>
          <Snowfall
            images={images}
            radius={[50, 100]}
            snowflakeCount={100}
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
            }}></Snowfall>
        </Konami>

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
