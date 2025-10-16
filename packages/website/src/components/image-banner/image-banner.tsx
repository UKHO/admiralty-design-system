import { AdmiraltyButton } from "@ukho/admiralty-react";
import "./image-banner.css";
import { useRouter } from "next/navigation";

export default function ImageBanner() {
  const router = useRouter();
  return (
    <div className="banner-image">
      <div className="ukho"></div>
      <div className="banner-title">
        <h1>
          Build your product or service using the ADMIRALTY and UK Hydrographic Office design system.
        </h1>
      </div>
      <div className="button-container">
        <AdmiraltyButton variant="secondary" onClick={() => router.push('/getting-started')}>Get started</AdmiraltyButton>
      </div>
    </div>
  );
}

