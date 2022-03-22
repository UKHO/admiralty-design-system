import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ukho-colour-block',
  templateUrl: './colour-block.component.html',
  styleUrls: ['./colour-block.component.scss'],
})
export class ColourBlockComponent implements OnChanges {
  /**
   * The width in pixels of the component.
   */
  @Input() width: number;
  /**
   * The height in pixels of the component.
   */
  @Input() height: number;
  /**
   * The heading text to display.
   */
  @Input() title: string;
  /**
   * The background colour of the component.
   */
  @Input() colour: 'admiralty-blue' | 'teal' | 'bright-blue' = 'admiralty-blue';
  /**
   * The function to call when the action button is pressed.
   */
  @Input() clickAction: () => any;
  /**
   * The text to display on the action button
   */
  @Input() actionText: string;

  textColour = 'white-text';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.colour) {
      this.textColour = this.colour === 'admiralty-blue' || this.colour === 'teal' ? 'white-text' : '';
    }
  }
}
