import React from "react";
import { AdmiraltyProgressTracker, AdmiraltyProgressTrackerStep } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyProgressTracker allowBackNavigation={true}>
      <AdmiraltyProgressTrackerStep
        stepId="step1"
        stepTitle="Account Setup"
        status="complete"
        summary="Username created"
      />
      <AdmiraltyProgressTrackerStep
        stepId="step2"
        stepTitle="Email Verification"
        status="error"
        errorMessage="Email address is invalid. Please check and try again."
      />
      <AdmiraltyProgressTrackerStep stepId="step3" stepTitle="Profile Details" status="upcoming" />
    </AdmiraltyProgressTracker>
  );
}
