import {
  Component,
  HostBinding,
  HostListener,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import * as fileSize from 'filesize';

let nextId = 0;

@Component({
  selector: 'ukho-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements ControlValueAccessor {
  id = `ukho-file-input-${++nextId}`;

  @Input() label = 'Click to choose a file or drag it here';
  files: FileList;

  @HostBinding('class.is-dragover') isDragover = false;

  private onChange: (files: FileList) => void;
  private onTouch: () => void;

  get fileName() {
    return this.files.item(0).name;
  }

  get fileSize() {
    return fileSize(this.files.item(0).size);
  }

  constructor(
    @Optional() @Self() private readonly controlDirective: NgControl,
  ) {
    if (controlDirective) {
      controlDirective.valueAccessor = this;
    }
  }

  @HostBinding('class.validated')
  get valid() {
    return (
      this.controlDirective &&
      this.controlDirective.control.valid &&
      this.controlDirective.control.touched
    );
  }

  @HostBinding('class.invalid')
  get invalid() {
    return !this.valid;
  }

  get validationMessages() {
    return this.controlDirective && this.controlDirective.errors;
  }

  @HostListener('dragstart', ['$event'])
  @HostListener('dragover', ['$event'])
  @HostListener('dragenter', ['$event'])
  start(event: DragEvent) {
    this.isDragover = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  @HostListener('dragend', ['$event'])
  @HostListener('dragleave', ['$event'])
  end(event: DragEvent) {
    this.isDragover = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  @HostListener('drop', ['$event'])
  drop(event: DragEvent) {
    this.isDragover = false;
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    this.files = files;
    this.onChange(files);
  }

  fileInputChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.files = files;
    this.onChange(files);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    this.files = obj;
  }
}
