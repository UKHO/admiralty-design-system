import React from "react";
import { AdmiraltyProgressTracker, AdmiraltyProgressTrackerStep } from "@ukho/admiralty-react";

export default function Demo() {
  return (
    <AdmiraltyProgressTracker allowBackNavigation={true}>
      <AdmiraltyProgressTrackerStep
        stepId="location"
        stepTitle="Choose location"
        status="complete"
        summary="Specify geographic coordinates"
      />
      <AdmiraltyProgressTrackerStep stepId="object" stepTitle="Choose object" status="current" />
      <AdmiraltyProgressTrackerStep stepId="date" stepTitle="Choose date" status="upcoming" />
    </AdmiraltyProgressTracker>
  );
}
