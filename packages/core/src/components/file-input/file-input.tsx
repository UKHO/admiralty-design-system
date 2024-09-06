import { Component, Element, Event, Host, h, Prop, State, EventEmitter } from '@stencil/core';
import { FileInputChangeEventDetail } from './file-input.interface';

@Component({
  tag: 'admiralty-file-input',
  styleUrl: 'file-input.scss',
  scoped: true,
})
export class FileInputComponent {
  @Element() el: HTMLElement;

  /**
   * Used to display instructions to the user and is replaced with the filename the user inputs
   */
  @Prop() label: string = 'Click to choose a file or drag it';

  /**
   * If true, enables multiple files to be selected or dragged
   */
  @Prop() multiple = false;

  /**
   * Whether to show that the file input is in an invalid state.
   */
  @Prop() invalid: boolean = false;

  /**
   * The message to show when the file input is invalid.
   */
  @Prop() invalidMessage: string = null;

  /**
   * Emitted when the added file(s) changes
   */
  @Event() fileInputChange: EventEmitter<FileInputChangeEventDetail>;

  id: string = `admiralty-file-input-${++nextId}`;

  /**
   * INTERNAL - The list of files currently in the field
   */
  @State() files: File[];

  /**
   * The event that is fired when the user clicks on the file input box and uses the default dialog
   * @param event
   */
  changeHandler(event: Event) {
    event.preventDefault();
    this.storeFileInfo((event.target as HTMLInputElement).files);

    this.fileInputChange.emit({ files: this.files });
  }

  private storeFileInfo(files: FileList) {
    if (files.length === 0) {
      this.files = [];
      return;
    }
    this.files = this.multiple ? [...(files as unknown as File[])] : [files.item(0)];
  }

  /**
   * Prevents default dragOver behaviour which, stops the file being downloaded to the browser
   * in a new tab
   * @param event
   */
  dragOverHandler(event: DragEvent) {
    event.preventDefault();
    this.el.querySelector('.admiralty-file-input').classList.add('drop_zone');
  }

  /**
   * When this event is fired the 'drop_zone' class is removed from the wrapper 'admiralty-file-input' div
   * which, turns the background back to off white
   * @param event
   */
  dragLeaveHander(event: DragEvent) {
    event.preventDefault();
    this.el.querySelector('.admiralty-file-input').classList.remove('drop_zone');
  }

  /**
   * Handles the 'file' the user drops into the input field
   * Does a check if it's a file and update the interface with the filename and the size of the file
   * @param event
   */
  dropHandler(event: DragEvent) {
    event.preventDefault();
    this.el.querySelector('.admiralty-file-input').classList.remove('drop_zone');

    if (event.dataTransfer.files) {
      this.storeFileInfo(event.dataTransfer.files);
      this.fileInputChange.emit({ files: this.files });
    }
  }

  render() {
    return (
      <Host onDragLeave={event => this.dragLeaveHander(event)} onDragOver={event => this.dragOverHandler(event)} onDrop={event => this.dropHandler(event)}>
        <div class={{ 'admiralty-file-input': true, 'invalid': this.invalid }}>
          <label htmlFor={this.id}>
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>{this.label}</span>
          </label>
          <input onChange={event => this.changeHandler(event)} id={this.id} aria-label="Upload a file" type="file" class="admiralty-form-field" multiple={this.multiple} />
        </div>
        <admiralty-input-invalid style={{ ...(!(this.invalid && this.invalidMessage) ? { display: 'none' } : {}) }}>{this.invalidMessage}</admiralty-input-invalid>
      </Host>
    );
  }
}

let nextId = 0;
