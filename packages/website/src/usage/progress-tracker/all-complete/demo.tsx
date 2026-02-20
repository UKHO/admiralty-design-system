import React from "react";
import { AdmiraltyProgressTracker, AdmiraltyProgressTrackerStep } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyProgressTracker>
      <AdmiraltyProgressTrackerStep
        stepId="account"
        stepTitle="Account creation"
        status="complete"
        summary="Email verified"
      />
      <AdmiraltyProgressTrackerStep stepId="payment" stepTitle="Payment setup" status="complete" summary="Card added" />
      <AdmiraltyProgressTrackerStep stepId="verification" stepTitle="Verification" status="complete" />
    </AdmiraltyProgressTracker>
  );
}
