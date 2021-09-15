import { Component, OnInit } from '@angular/core';
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
}
