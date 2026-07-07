import React, { useRef, ReactNode, useEffect, useState, useId } from "react";
import "./prism-default.css";
import "../playground/playground.css";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-tsx.min";
import { AdmiraltyButton, AdmiraltyTooltip } from "@ukho/admiralty-react";

interface CopyCodeSnippetProps {
  children: ReactNode;
}

export default function CopyCodeSnippet({ children }: CopyCodeSnippetProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedReshowTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyFeedbackActiveRef = useRef(false);
  const copyTargetId = `${useId().replace(/:/g, "")}-copy-target`;
  const tooltipId = `${copyTargetId}-tooltip`;

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

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }

      if (copiedReshowTimeoutRef.current) {
        clearTimeout(copiedReshowTimeoutRef.current);
      }
    };
  }, []);

  const onCopy = () => {
    if (copiedTimeoutRef.current) {
      clearTimeout(copiedTimeoutRef.current);
    }

    if (copiedReshowTimeoutRef.current) {
      clearTimeout(copiedReshowTimeoutRef.current);
    }

    copyFeedbackActiveRef.current = true;
    setCopied(true);
    showTooltip();
    // Tooltip has its own delayed hide on mouseleave; re-show after that delay to keep copied state visible.
    copiedReshowTimeoutRef.current = setTimeout(() => {
      showTooltip();
      copiedReshowTimeoutRef.current = null;
    }, 180);
    navigator.clipboard.writeText(codeToCopy);

    copiedTimeoutRef.current = setTimeout(() => {
      copyFeedbackActiveRef.current = false;
      setCopied(false);
      hideTooltip();
      copiedTimeoutRef.current = null;
    }, 2000);
  };

  const showTooltip = () => {
    const tooltipEl = document.getElementById(tooltipId) as
      | (HTMLElement & { show?: () => void; positionTooltip?: () => void })
      | null;
    tooltipEl?.show?.();
    tooltipEl?.positionTooltip?.();
  };

  const hideTooltip = () => {
    if (copyFeedbackActiveRef.current) {
      return;
    }

    const tooltipEl = document.getElementById(tooltipId) as (HTMLElement & { hide?: () => void }) | null;
    tooltipEl?.hide?.();
  };

  return (
    <div className="codesnippet-content">
      <pre ref={codeRef} suppressHydrationWarning={true}>
        {children}
      </pre>
      <span
        id={copyTargetId}
        className={`copy-button${copied ? " copy-button--copied" : ""}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}>
        <AdmiraltyButton
          onClick={onCopy}
          variant="icon-secondary"
          borderless={true}
          type="button"
          icon={copied ? "check-rounded" : "content-copy-outline"}
          aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}></AdmiraltyButton>
      </span>
      <AdmiraltyTooltip id={tooltipId} for={copyTargetId}>
        <span className="copy-tooltip-label">{copied ? "Copied!" : "Copy"}</span>
      </AdmiraltyTooltip>
    </div>
  );
}
