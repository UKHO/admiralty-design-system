import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ukho-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  /** The label text to be rendered. */
  @Input() label: string;

  @ViewChild(TemplateRef, { static: true }) _implicitContent: TemplateRef<any>;

  private _templateRef: TemplateRef<any> | null = null;
  ngOnInit(): void {
    this._templateRef = this._implicitContent;
  }

  get content(): TemplateRef<any> | null {
    return this._templateRef;
  }
}
