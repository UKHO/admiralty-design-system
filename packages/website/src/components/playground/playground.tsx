import { MDXContent } from "mdx/types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { CodeSnippets, UsageTarget } from "@/components/playground/playground.types";
import { AdmiraltyTab, AdmiraltyTabGroup } from "@ukho/admiralty-react";

interface PlaygroundProps {
  code: { [key in UsageTarget]?: MDXContent };
}

interface PlaygroundTabProps {
  codeSnippet: ReactElement;
  usageTarget: UsageTarget;
}

const PlaygroundTab = (props: PlaygroundTabProps) => {
  return <AdmiraltyTab label={props.usageTarget}>{props.codeSnippet}</AdmiraltyTab>;
};

function isUsageTarget(key: string): key is UsageTarget {
  return Object.values(UsageTarget).includes(key as UsageTarget);
}

export default function Playground(props: PlaygroundProps) {
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippets>({});
  useEffect(() => {
    const codeSnippets: CodeSnippets = {};
    for (const key in props.code) {
      if (props.code.hasOwnProperty(key) && isUsageTarget(key)) {
        const value = props.code[key];
        if (typeof value === "function") {
          if (value) {
            codeSnippets[key] = value({});
          }
        }
      }
    }
    setCodeSnippets(codeSnippets);
  }, [props.code]);

  const sortedUsageTargets = useMemo(() => Object.keys(UsageTarget).sort(), []);

  return (
    <div className="playground-container">
      <AdmiraltyTabGroup>
        {sortedUsageTargets.map((lang) => {
          /**
           * If code was not passed for this target
           * then we should disable the button.
           */
          let langKey = lang as keyof typeof UsageTarget;
          const usageTarget = UsageTarget[langKey];
          const hasCode = props.code[usageTarget] !== undefined;
          if (hasCode) {
            return (
              <PlaygroundTab
                key={lang}
                codeSnippet={codeSnippets[usageTarget]}
                usageTarget={usageTarget}></PlaygroundTab>
            );
          }
        })}
      </AdmiraltyTabGroup>
    </div>
  );
}
