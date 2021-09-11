import { WebsocketService } from './../../services/websocket.service';
import { slideIn } from './../../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  animations: [slideIn],
})
export class ToastMessageComponent implements OnInit {
  isShowToast: boolean = false;
  private timeOut: any;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.ws.addEventListener('message', (event) => {
      if (
        JSON.parse(event.data).status === 'success' &&
        JSON.parse(event.data).event === 'REGISTER'
      ) {
        this.isShowToast = true;
        this.timeOut = setTimeout(() => {
          this.isShowToast = false;
        }, 3000);
      }
    });
  }

  closeToast(): void {
    this.isShowToast = false;
    clearTimeout(this.timeOut);
  }
}
