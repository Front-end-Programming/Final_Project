import { WebsocketService } from './../../services/websocket.service';
import { UiServiceService } from './../../services/ui-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  username: string = '';

  constructor(
    private uiService: UiServiceService,
    private websocketService: WebsocketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username = this.uiService.username;
  }

  showJoinGroup(): void {
    this.uiService.showJoinGroup();
  }

  showCreateGroup(): void {
    this.uiService.showCreateGroup();
  }


  onLogOut(): void {
    //  1. Send data to server
    this.websocketService.onLogOut();

    //  2. Navigate back to sign-in component
    this.authService.onLogOut();

  }
}
