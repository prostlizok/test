import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() className: string = 'basic-button';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Output() buttonClickEmitter = new EventEmitter<void>();
  
  handleClick() {
    this.buttonClickEmitter.emit();
  }

}
