import { fakeAsync } from '@angular/core/testing';
import { createHostFactory } from '@ngneat/spectator/jest';

import { CodeSnippetComponent } from './code-snippet.component';
import { ButtonModule } from '../button/button.module';

describe('CodeSnippetComponent', () => {
  const createHost = createHostFactory({
    component: CodeSnippetComponent,
    imports: [ButtonModule],
  });

  const timeout = 5000;
  const htmlCodeExample = `<main>
    <router-outlet></router-outlet>
  </main>

  <footer>&copy; Crown copyright 2020 UK Hydrographic Office</footer>`;
  const cSharpCodeExample = `string songLyrics = "You say goodbye, and I say hello";
  Console.WriteLine(songLyrics.StartsWith("You"));
  Console.WriteLine(songLyrics.StartsWith("goodbye"));
  
  Console.WriteLine(songLyrics.EndsWith("hello"));
  Console.WriteLine(songLyrics.EndsWith("goodbye"));`;

  it('should create', () => {
    const spectator = createHost('<ukho-code-snippet></ukho-code-snippet>');
    expect(spectator.component).toBeTruthy();
  });

  it('should have an empty code element when Code is not provided', fakeAsync(() => {
    const spectator = createHost('<ukho-code-snippet></ukho-code-snippet>');
    spectator.tick(timeout);
    const codeElement = spectator.query('code');
    expect(codeElement).toBeEmpty();
  }));

  it('should have a populated code element when valid input is provided', fakeAsync(() => {
    const spectator = createHost('<ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet>', {
      hostProps: {
        code: htmlCodeExample,
        language: 'html',
      },
    });
    spectator.tick(timeout);
    const codeElement = spectator.query('code');
    expect(codeElement).not.toBeEmpty();
  }));

  it('should call onCopyClick() when Copy Code link is clicked', fakeAsync(() => {
    const spectator = createHost('<ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet>', {
      hostProps: {
        code: htmlCodeExample,
        language: 'html',
      },
      props: {
        onCopyClick: jest.fn(),
      },
    });
    jest.resetAllMocks();
    expect(spectator.component.onCopyClick).toHaveBeenCalledTimes(0);
    spectator.click('button');
    spectator.tick(timeout);
    expect(spectator.component.onCopyClick).toHaveBeenCalledTimes(1);
  }));

  it('should call highlightAll() when component is created', fakeAsync(() => {
    const highlightjs = require('highlight.js');
    const highlightAllSpy = jest.spyOn(highlightjs, 'highlightAll');
    expect(highlightAllSpy).toHaveBeenCalledTimes(0);

    const spectator = createHost('<ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet>', {
      hostProps: {
        code: htmlCodeExample,
        language: 'html',
      },
    });

    expect(highlightAllSpy).toHaveBeenCalledTimes(1);
  }));
});
