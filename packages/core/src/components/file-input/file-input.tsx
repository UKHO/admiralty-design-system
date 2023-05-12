import { Component, Element, Event, Host, h, Prop, State, EventEmitter } from '@stencil/core';

@Component({
  tag: 'admiralty-file-input',
  styleUrl: 'file-input.scss',
  shadow: true,
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
   * Emitted when the added file(s) changes
   */
  @Event() fileInputChange: EventEmitter<File[]>;

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

    this.fileInputChange.emit(this.files);
    console.log('changeHandler:', this.files);
  }

  private storeFileInfo(files: FileList) {
    this.files = this.multiple ? [...(files as unknown as File[])] : [files.item(0)];
  }

  /**
   * Prevents default dragOver behaviour which, stops the file being downloaded to the browser
   * in a new tab
   * @param event
   */
  dragOverHandler(event: DragEvent) {
    event.preventDefault();
    this.el.shadowRoot.querySelector('.admiralty-file-input').classList.add('drop_zone');
  }

  /**
   * When this event is fired the 'drop_zone' class is removed from the wrapper 'admiralty-file-input' div
   * which, turns the background back to off white
   * @param event
   */
  dragLeaveHander(event: DragEvent) {
    event.preventDefault();
    this.el.shadowRoot.querySelector('.admiralty-file-input').classList.remove('drop_zone');
  }

  /**
   * Handles the 'file' the user drops into the input field
   * Does a check if it's a file and update the interface with the filename and the size of the file
   * @param event
   */
  dropHandler(event: DragEvent) {
    event.preventDefault();
    this.el.shadowRoot.querySelector('.admiralty-file-input').classList.remove('drop_zone');

    if (event.dataTransfer.files) {
      this.storeFileInfo(event.dataTransfer.files);
      this.fileInputChange.emit(this.files);
      console.log('Drop: ', this.files);
    }
  }

  get filesDisplay() {
    return `${this.files[0].name} (${this.sizeOf(this.files[0].size)}) ${this.files.length > 1 ? ' ...' : ''}`;
  }

  /**
   * Takes the bytes of a file and returns it as human readable figure
   * @param bytes pass bytes throughs as a number
   * @returns convers the bytes to the appropiate largest figure followed by the  format ie. 'kb', 'mb' etc
   */
  sizeOf = function (bytes: number) {
    if (bytes === 0) {
      return '0.00 B';
    }
    var e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, e)).toFixed(2) + ' ' + ' KMGTP'.charAt(e) + 'B';
  };

  render() {
    return (
      <Host onDragLeave={event => this.dragLeaveHander(event)} onDragOver={event => this.dragOverHandler(event)} onDrop={event => this.dropHandler(event)}>
        <div class="admiralty-file-input">
          <label htmlFor={this.id}>
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            {this.files?.length ? <span>{this.filesDisplay}</span> : <span class="instructions">{this.label}</span>}
          </label>
          <input
            onChange={event => this.changeHandler(event)}
            id={this.id}
            aria-hidden="true"
            aria-label="File Upload"
            type="file"
            class="admiralty-form-field"
            multiple={this.multiple}
          />
        </div>
      </Host>
    );
  }
}

let nextId = 0;
