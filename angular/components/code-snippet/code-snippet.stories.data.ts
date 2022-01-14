import { action } from '@storybook/addon-actions';
import { Component, Input } from '@angular/core';

export enum Example {
  AngularTemplate,
}

@Component({
  selector: 'ukho-code-snippet-wrapper',
  template: `<ukho-code-snippet [code]="code" [language]="language"></ukho-code-snippet> `,
})
export class CodeSnippetWrapperComponent {
  @Input() set example(example: Example) {
    switch (example) {
      case Example.AngularTemplate:
        this.code = this.example1;
        break;

      default:
        this.code = '';
        break;
    }
  }

  example1 = `<ukho-select [label]="label">
  <option>White</option>
  <option>Blue</option>
  <option>Black</option>
  <option>Red</option>
  <option>Green</option>
</ukho-select>`;

  code = ``;
  language = 'html';
}
