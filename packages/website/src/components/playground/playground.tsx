import { MDXContent } from 'mdx/types';
import React, { ComponentType, JSX } from 'react';
import { LanguageTarget } from '@/components/playground/playground.types';
import { AdmiraltyTab, AdmiraltyTabGroup } from '@ukho/admiralty-react';
import './playground.css';

interface PlaygroundProps {
  code: { [key in LanguageTarget]?: MDXContent };
  demo: ComponentType;
}

interface PlaygroundTabProps {
  codeSnippet: JSX.Element;
  languageTarget: string | undefined;
}

const PlaygroundTab = (props: PlaygroundTabProps) => {
  return <AdmiraltyTab label={props.languageTarget}>{props.codeSnippet}</AdmiraltyTab>;
};

export default function Playground(props: PlaygroundProps) {
  return (
    <div className="playground-container">
      <div className="demo-container">
        <props.demo/>
      </div>
      <div className="codesnippet-container">
        <AdmiraltyTabGroup>
          {Object.values(LanguageTarget)
            .sort((a: LanguageTarget, b: LanguageTarget): number => a.toString().localeCompare(b.toString()))
            .map((language: LanguageTarget) => {
            const RawCode: MDXContent | undefined = props.code[language];
            const enumKey: string | undefined = Object.entries(LanguageTarget).find(([_,val]: [string, LanguageTarget]): boolean => val === language)?.[0];
            if (RawCode) {
              return (
                <PlaygroundTab key={language}
                               codeSnippet={<RawCode/>}
                               languageTarget={enumKey}></PlaygroundTab>
              );
            }
          })}
        </AdmiraltyTabGroup>
      </div>
    </div>
  );
}
