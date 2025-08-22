import { AdmiraltyButton } from "@ukho/admiralty-react";
import "./image-banner.css";
import { useRouter } from "next/navigation";

export default function ImageBanner() {
  const router = useRouter();
  return (
    <div className="banner-image">
      <div className="ukho"></div>
      <h1>
        Build your product or service using the ADMIRALTY and UK Hydrographic Office.
      </h1>
      <p>
        <AdmiraltyButton variant="secondary" onClick={() => router.push('/getting-started')}>Get started</AdmiraltyButton>
      </p>
    </div>
  );
}

