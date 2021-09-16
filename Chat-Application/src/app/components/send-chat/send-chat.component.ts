import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.scss']
})
export class SendChatComponent implements OnInit {
  message: string = '';
  darkMode: boolean;
  isShowEmoji: boolean = false;
  @Input() isExpand: boolean;
  @Output() onSendChat: EventEmitter<string> = new EventEmitter();

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((value) => {
      this.darkMode = value;
    })
  }

  hasMessage() {
    if(this.message.trim() !== '') {
      return true;
    } else {
      return false;
    }
  }

  addEmoji(event: any) {
    this.message += event.emoji.native;
  }

  onSubmit(): void {
    this.onSendChat.emit(this.message.trim());
    this.message = '';
  }
}
