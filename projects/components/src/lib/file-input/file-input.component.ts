import { Component, HostBinding, HostListener, Input } from '@angular/core';
import * as fileSizeNs from 'filesize';
import { UkhoAbstractFormField } from '../form-field/form-field';

const fileSize = fileSizeNs;

@Component({
  selector: 'ukho-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent extends UkhoAbstractFormField {
  /**
   * The label displayed within the file input box
   */
  @Input() label = 'Click to choose a file or drag it here';

  /**
   * INTERNAL - The list of files currently in the field
   */
  files: FileList;

  @HostBinding('class.is-dragover') isDragover = false;

  /**
   * @ignore
   */
  public onChange: (files: FileList) => void;

  get fileName() {
    return this.files.item(0).name;
  }

  get fileSize() {
    return fileSize(this.files.item(0).size);
  }

  @HostBinding('class.validated')
  get valid() {
    return this.controlDirective && this.controlDirective.control.valid && this.controlDirective.control.touched;
  }

  @HostBinding('class.invalid')
  get invalid() {
    return this.controlDirective && !this.controlDirective.control.valid && this.controlDirective.control.touched;
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
    this.onTouch();
    this.onChange(files);
  }

  /**
   * Function that gets called when the file input gets changed
   */
  public fileInputChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.files = files;
    this.onTouch();
    this.onChange(files);
  }

  /**
   * @ignore
   */
  writeValue(obj: any): void {
    this.files = obj;

    super.writeValue(obj);
  }
}
