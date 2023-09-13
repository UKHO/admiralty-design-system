import { MDXContent } from "mdx/types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { UsageTarget } from "@/components/playground.types";
import { AdmiraltyTab, AdmiraltyTabGroup } from "@ukho/admiralty-react";
import Prism from "prismjs";

interface PlaygroundProps {
  code: { [key in UsageTarget]?: MDXContent };
}

interface PlaygroundTabProps {
  language: string;
  codeSnippet: ReactElement;
  usageTarget: UsageTarget;
  setUsageTarget: any;
}

const PlaygroundTab = (props: PlaygroundTabProps) => {
  const langValue = UsageTarget[props.language];

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <AdmiraltyTab label={props.language} onClick={() => props.setUsageTarget(langValue)}>
      {props.codeSnippet}
    </AdmiraltyTab>
  );
};

export default function Playground(props: PlaygroundProps) {
  const [codeSnippets, setCodeSnippets] = useState({});
  const [usageTarget, setUsageTarget] = useState(UsageTarget.Angular);

  useEffect(() => {
    const codeSnippets = {};
    Object.keys(props.code).forEach((key) => {
      if (typeof props.code[key] === "function") {
        /**
         * Instantiates the React component from the MDX content for
         * single-file playground examples.
         */
        codeSnippets[key] = props.code[key]({});
      }
    });
    setCodeSnippets(codeSnippets);
  }, []);

  const sortedUsageTargets = useMemo(() => Object.keys(UsageTarget).sort(), []);

  return (
    <div className="playground-container">
      <AdmiraltyTabGroup>
        {sortedUsageTargets.map((lang) => {
          /**
           * If code was not passed for this target
           * then we should disable the button.
           */
          const langValue = UsageTarget[lang];
          const hasCode = props.code[langValue] !== undefined;
          if (hasCode) {
            return (
              <PlaygroundTab
                key={lang}
                language={lang}
                codeSnippet={codeSnippets[langValue]}
                setUsageTarget={setUsageTarget}
                usageTarget={usageTarget}></PlaygroundTab>
            );
          }
        })}
      </AdmiraltyTabGroup>
    </div>
  );
}
