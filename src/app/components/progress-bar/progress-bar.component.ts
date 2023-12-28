import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() currValue: number = 0;
  @Input() maxValue: number = 0;

  @Input() label: string = '';

  getPercentage() {
    return ((this.currValue / this.maxValue) * 100).toFixed(0)
  }

  getProgressInfo() {
    return `${this.currValue}/${this.maxValue} (${this.getPercentage()}%)`
  }



}
