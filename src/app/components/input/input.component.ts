import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputType } from '../../models/InputType';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { DragAndDropDirective } from '../../directives/dnd/drag-and-drop.directive';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [CommonModule, ButtonComponent, DragAndDropDirective]
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() labelText: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() icon: string = '';
  @Input() className: string = '';
  @Input() value: string = '';
  @Input() selectOptions: any = [];
  @Input() input: InputType = InputType.basicInput;
  @Input() allowedFileFormats: any[] = [];
  @ViewChild('inputValue') inputValue: ElementRef = {} as ElementRef
  @ViewChild('fileValue') fileValue: ElementRef = {} as ElementRef

  @Output() inputValueEmmiter = new EventEmitter<any>();

  InputType = InputType;

  inputError: string = '';
  currentOption: string = this.selectOptions[0];
  isShownOptions: boolean = false;
  selectIcon: string = 'expand_more';
  passwordIcon: string = 'visibility'
  uploadedFileList: any[] = [];


  ngAfterViewInit() {
    if (this.inputValue) this.inputValue.nativeElement.value = this.value;
  }

  getAllowedFormats() {
    return this.allowedFileFormats.map((item) => `.${item}`)
  }

  getAllowedFormatsDND() {
   return  this.allowedFileFormats.join(', ').toUpperCase();
  }

  setFocusOnInput() {
    const inputDiv = this.inputValue.nativeElement;
    this.inputValue.nativeElement.focus();

    const range = document.createRange();
    range.selectNodeContents(inputDiv);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  handleFileSize(size: number): string {
    if (isNaN(size)) { return ''; }

    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return` ${size.toFixed(1)} ${units[unitIndex]}`;
  }

  toggleShowPassword() {
    if (this.type === 'password') {
      this.type = 'text'
      this.passwordIcon = 'visibility_off'
    }
    else {
      this.type = 'password'
      this.passwordIcon = 'visibility'
    }
    this.setFocusOnInput();
  }

  toggleShowOptions() {
    this.isShownOptions = !this.isShownOptions;
    this.toggleSelectIcon();
  }

  toggleSelectIcon() {
    if (this.selectIcon === 'expand_more') this.selectIcon = 'expand_less';
    else this.selectIcon = 'expand_more'
  }

  handleSelect(option: string) {
    this.currentOption = option;
    this.isShownOptions = false;
    this.toggleSelectIcon();
    this.inputValueEmmiter.emit(this.currentOption);
  }

  handleInput() {
    this.inputValueEmmiter.emit(this.inputValue.nativeElement.value);
  }

  setFile(event: any) {
    this.uploadedFileList = event;
    this.inputValueEmmiter.emit(this.uploadedFileList);
  }

  handleFileInput(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.setFile(input.files);
    }
  }

  deleteFile(fileToDelete: any) {
    this.uploadedFileList = Array.from(this.uploadedFileList).filter(file => file.name !== fileToDelete.name);
    this.inputValueEmmiter.emit(this.uploadedFileList);

  }

}