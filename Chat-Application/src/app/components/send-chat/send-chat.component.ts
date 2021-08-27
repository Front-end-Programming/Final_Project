import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.scss']
})
export class SendChatComponent implements OnInit {
  message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  hasMessage() {
    if(this.message.trim() !== '') {
      return true;
    } else {
      return false;
    }
  }

}
