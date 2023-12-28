import { Directive, HostListener, EventEmitter, HostBinding, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]',
  standalone: true
})
export class DragAndDropDirective {
  constructor() { }

  @HostBinding('class.fileover') fileOver: boolean = false;
  @Output() fileEmitter = new EventEmitter<any>();

  @HostListener('dragover', ['$event'])
  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event'])
  public ondrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileEmitter.emit(files)
    }
  }


}
