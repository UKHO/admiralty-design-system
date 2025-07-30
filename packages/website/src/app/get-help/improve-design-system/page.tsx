"use client";
import ImproveDesignSystemPage from "./improve-design-system.mdx";
import ProposeChangeSection from "./propose-change.mdx";
import ReportBugSection from "./report-bug.mdx";
import { AdmiraltyButton } from "@ukho/admiralty-react/dist";
export default function Home() {
  return (
    <div>
      <ImproveDesignSystemPage></ImproveDesignSystemPage>
      <ProposeChangeSection></ProposeChangeSection>
      <AdmiraltyButton>Propose a change</AdmiraltyButton>
      <ReportBugSection></ReportBugSection>
      <AdmiraltyButton>Report a bug</AdmiraltyButton>
    </div>
  );
}
