import React, { useRef, ReactNode, useEffect, useState } from "react";
import "./prism-default.css";
import "../playground/playground.css";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-tsx.min";
import { AdmiraltyButton } from "@ukho/admiralty-react";

interface CopyCodeSnippetProps {
  children: ReactNode;
  // Your other props here.
}

export default function CopyCodeSnippet({ children }: CopyCodeSnippetProps) {
  const codeRef = useRef<HTMLPreElement>(null);

  const [codeToCopy, setCodeToCopy] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Set the originalCode state with the initial inner text of the pre element
    if (codeRef.current) {
      setCodeToCopy(codeRef.current.innerText);
    }
  }, []);

  useEffect(() => {
    // Highlight code when component mounts or when children change
    Prism.highlightAll();
  }, [children]);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(codeToCopy);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="codesnippet-content">
      <pre ref={codeRef} suppressHydrationWarning={true}>
        {children}
      </pre>
      <AdmiraltyButton
        onClick={onCopy}
        variant="icon-secondary"
        borderless={true}
        type="button"
        icon={copied ? "check-rounded" : "content-copy"}
        className={`copy-button${copied ? " copy-button--copied" : ""}`}
        aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
        title={copied ? "Copied!" : "Copy"}></AdmiraltyButton>
    </div>
  );
}
