import React, { useRef, ReactNode, useEffect, useState } from "react";
import "./prism-default.css";
import { highlightAll } from "prismjs";

interface CopyCodeSnippetProps {
  children: ReactNode;
  // Your other props here.
}

export default function CopyCodeSnippet({ children, ...props }: CopyCodeSnippetProps) {
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
    highlightAll();
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
      <pre ref={codeRef}>{children}</pre>
      <button onClick={onCopy} className="copy-button">
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
