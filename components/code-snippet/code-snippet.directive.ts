import { Directive, ElementRef, Input, OnChanges, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { highlightAuto } from 'highlight.js';

@Directive({
  selector: '[codeBlock]',
})
export class CodeSnippetDirective implements OnChanges {
  @Input() code: string;

  @Input() language: string;

  private readonly nativeElement: HTMLElement;
  constructor(el: ElementRef, private sanitizer: DomSanitizer) {
    this.nativeElement = el.nativeElement;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (this.code && changes?.code?.currentValue && changes.code.currentValue !== changes.code.previousValue) ||
      (this.language &&
        changes?.language?.currentValue &&
        changes.language.currentValue !== changes.language.previousValue)
    ) {
      this.highlightElement(this.code, [this.language]);
    }
  }

  highlightElement(code: string, languages: string[]): void {
    const highlightResult = highlightAuto(code, languages);
    this.setInnerHTML(highlightResult.value);
  }

  private setInnerHTML(content: string | null) {
    this.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, content) || '';
  }
}
