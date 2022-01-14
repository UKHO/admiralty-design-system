import { AfterViewInit, Component, Directive, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'ukho-tab-body',
  templateUrl: './tab-body.component.html',
})
export class TabBodyComponent implements AfterViewInit {
  @Input() content: TemplateRef<any>;
  @ViewChild('bodyContent', { read: ViewContainerRef }) bodyContent: ViewContainerRef;
  ngAfterViewInit(): void {
    this.bodyContent.createEmbeddedView(this.content);
  }
}
