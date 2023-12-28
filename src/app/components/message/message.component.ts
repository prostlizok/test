import { Component, Input } from '@angular/core';
import { MessageStatus } from '../../models/MessageStatus';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() messageText = '';
  @Input() messageStatus: MessageStatus = MessageStatus.success;
  MessageStatus = MessageStatus;

}
