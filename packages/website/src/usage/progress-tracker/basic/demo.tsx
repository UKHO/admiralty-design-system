import React from "react";
import { AdmiraltyProgressTracker, AdmiraltyProgressTrackerStep } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyProgressTracker>
      <AdmiraltyProgressTrackerStep
        stepId="step1"
        stepTitle="Step 1: Requirements"
        status="complete"
        summary="Documents uploaded"
      />
      <AdmiraltyProgressTrackerStep stepId="step2" stepTitle="Step 2: Review" status="current" summary="In progress" />
      <AdmiraltyProgressTrackerStep stepId="step3" stepTitle="Step 3: Approval" status="upcoming" />
    </AdmiraltyProgressTracker>
  );
}
