"use client";
import ImproveDesignSystemPage from "./improve-design-system.mdx";
import ProposeChangeSection from "./propose-change.mdx";
import ReportBugSection from "./report-bug.mdx";
import { AdmiraltyButton } from "@ukho/admiralty-react/dist";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const proposeChangeNavigate = () => {
    window.open('https://github.com/UKHO/admiralty-design-system/issues/new?template=feature_request.md', '_blank');
  };

  const reportBugNavigate = () => {
    window.open('https://github.com/UKHO/admiralty-design-system/issues/new?template=bug_report.md', '_blank');
  };

  return (
    <div>
      <ImproveDesignSystemPage></ImproveDesignSystemPage>
      <ProposeChangeSection></ProposeChangeSection>
      <AdmiraltyButton onClick={proposeChangeNavigate}>Propose a change</AdmiraltyButton>
      <ReportBugSection></ReportBugSection>
      <AdmiraltyButton onClick={reportBugNavigate}>Report a bug</AdmiraltyButton>
    </div>
  );
}
