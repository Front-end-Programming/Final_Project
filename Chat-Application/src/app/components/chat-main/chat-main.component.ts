import { UiServiceService } from './../../services/ui-service.service';
import { WebsocketService } from './../../services/websocket.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Message } from './../../models/message.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss'],
})
export class ChatMainComponent implements OnInit, OnDestroy {
  mainUsername: string = '';
  isShowUsername: boolean = false;
  isExpandInfo: boolean = true;
  isCollapse: boolean = false;
  onlineSubscription: Subscription;
  peopleSubscription: Subscription;
  groupSubscription: Subscription;

  username: string = '';
  type: number;

  isOnline: boolean = true;
  messages: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private websocketServie: WebsocketService,
    private uiService: UiServiceService
  ) {}

  ngOnInit(): void { 
    this.mainUsername = this.uiService.username;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.username = <string>params.get('name');
      this.type = +<string>params.get('type');

      console.log(this.type);

      this.websocketServie.checkOnline(this.username);
      this.onlineSubscription = this.websocketServie.checkOnlineSubject.subscribe((data) => {
        this.isOnline = data;
      });

        this.websocketServie.getMessagesFromPeople(this.username);
        this.peopleSubscription = this.websocketServie.messagesPeople.subscribe((data) => {
          this.messages = data;
        });

        this.websocketServie.getMessagesFromGroup(this.username);
        this.groupSubscription = this.websocketServie.messagesGroup.subscribe((data) => {
          this.messages = data;
        });
    });
  }

  ngOnDestroy(): void {
    this.onlineSubscription.unsubscribe();
    this.peopleSubscription.unsubscribe();
    this.groupSubscription.unsubscribe();
  }

  showUsername(): void {
    this.isShowUsername = true;
  }

  hideUsername(): void {
    this.isShowUsername = false;
  }

  collapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  expandInfo(): void {
    this.isExpandInfo = !this.isExpandInfo;
  }
}
