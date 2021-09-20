import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { highlightAll, configure } from 'highlight.js';

@Component({
  selector: 'ukho-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('copyCodeAnimation', [
      state(
        'show',
        style({
          opacity: 0.65,
          backgroundColor: '#6ea962',
          display: 'flex',
        }),
      ),
      state(
        'hide',
        style({
          opacity: 0,
          display: 'none',
        }),
      ),
      transition('show => hide', [
        animate('0.5s 0.5s', keyframes([style({ opacity: '0.65' }), style({ display: 'block', opacity: '0' })])),
      ]),
    ]),
  ],
})
export class CodeSnippetComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    configure({ languages: [this.language] });
    highlightAll();
  }

  @Input() code: string;

  @Input() language: string;

  onCopyClick() {
    this.showCopiedCode = true;
    navigator.clipboard.writeText(this.code).then(
      () => {
        /* success */
        this.showCopiedCode = false;
      },
      () => {
        /* failure */
      },
    );
  }

  showCopiedCode = false;
}
