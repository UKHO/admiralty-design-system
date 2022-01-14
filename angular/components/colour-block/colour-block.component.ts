import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ukho-colour-block',
  templateUrl: './colour-block.component.html',
  styleUrls: ['./colour-block.component.scss'],
})
export class ColourBlockComponent {
  @Input() width: number;
  @Input() height: number;
  @Input() title: string;
  @Input() colour: 'admiralty-blue' | 'teal' | 'bright-blue' = 'admiralty-blue';
  @Input() clickAction: () => any;
  @Input() actionText: string;

  constructor() {}

  getTextColour(): string {
    if (this.colour === 'admiralty-blue' || this.colour === 'teal') {
      return 'white-text';
    }
    return '';
  }
}
