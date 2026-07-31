"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SITE_TITLE = "Admiralty Design System";

const routeTitleOverrides: Record<string, string> = {
  "/": "Overview",
  "/brand-guide": "Build on brand",
  "/getting-started": "Getting Started",
  "/get-help": "Get Help",
  "/patterns": "Patterns",
  "/principles": "How we design",
  "/updates": "Updates",
};

const segmentTitleOverrides: Record<string, string> = {
  contentdesign: "Content Design",
  userresearch: "User Research",
};

function toTitleCase(value: string): string {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function toVersionLabel(segment: string): string {
  const versionTokens = segment.slice(1).split("-").filter(Boolean);
  while (versionTokens.length < 3) {
    versionTokens.push("0");
  }

  return `v${versionTokens.join(".")}`;
}

function toSegmentTitle(segment: string): string {
  const lowerSegment = segment.toLowerCase();
  if (segmentTitleOverrides[lowerSegment]) {
    return segmentTitleOverrides[lowerSegment];
  }

  if (/^v\d+(?:-\d+)*$/i.test(segment)) {
    return toVersionLabel(segment);
  }

  return toTitleCase(segment.replace(/-/g, " "));
}

function buildTitle(pathname: string): string {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const routeOverride = routeTitleOverrides[normalizedPath];
  if (routeOverride) {
    return `${routeOverride} | ${SITE_TITLE}`;
  }

  const pathSegments = normalizedPath.split("/").filter(Boolean);
  if (pathSegments[0] === "components" && pathSegments.length > 1) {
    const componentName = toSegmentTitle(pathSegments[pathSegments.length - 1]);
    return `${componentName} | ${SITE_TITLE}`;
  }

  const segments = pathSegments.map(toSegmentTitle);
  const pageTitle = segments.join(" - ") || "Overview";

  return `${pageTitle} | ${SITE_TITLE}`;
}

export function updateDocumentTitle(pathname: string) {
  document.title = buildTitle(pathname);
}

function getInternalPathFromAnchor(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return null;
  }

  try {
    const targetUrl = new URL(href, window.location.href);
    if (targetUrl.origin !== window.location.origin) {
      return null;
    }

    return `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;
  } catch {
    return null;
  }
}

export function PageTitleManager() {
  const pathname = usePathname();

  useEffect(() => {
    updateDocumentTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]");
      if (!anchor) {
        return;
      }

      const nextPath = getInternalPathFromAnchor(anchor as HTMLAnchorElement);
      if (!nextPath) {
        return;
      }

      updateDocumentTitle(nextPath);
    };

    document.addEventListener("click", onDocumentClick, { capture: true });

    return () => {
      document.removeEventListener("click", onDocumentClick, { capture: true });
    };
  }, []);

  return null;
}
