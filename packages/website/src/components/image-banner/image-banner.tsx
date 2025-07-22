import { AdmiraltyButton } from "@ukho/admiralty-react";
import "./image-banner.css";

export default function ImageBanner() {
  return (
    <div className="banner-image">
      <div className="ukho"></div>
      <h1>
        Build your product or service using the ADMIRALTY and UK Hydrographic Office.
      </h1>
      <p>
        <AdmiraltyButton variant="secondary">Get started</AdmiraltyButton>
      </p>
    </div>
  );
}

