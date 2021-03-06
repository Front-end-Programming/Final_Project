import { Member } from './../../models/members.model';
import { UiServiceService } from './../../services/ui-service.service';
import { WebsocketService } from './../../services/websocket.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Message } from './../../models/message.model';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
  messagesGroupSubscription: Subscription;
  infoGroupSubscription: Subscription;
  username: string = '';
  type: number;
  isOnline: boolean = true;
  messages: Message[] = [];
  members: Member[] = [];
  owner: string = '';

  @ViewChild('messageList') ul: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private websocketService: WebsocketService,
    private uiService: UiServiceService
  ) {}

  ngOnInit(): void {
    this.updateMessage();
    this.mainUsername = this.uiService.username;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.username = <string>params.get('name');
      this.type = +(<string>params.get('type'));

      this.getOnlineInfo();

      if (this.type === 0) {
        this.getUserInfo();
      }

      if (this.type === 1) {
        this.getGroupInfo();
      }
    });
  }

  updateMessage(): void {
    this.websocketService.ws.addEventListener('message', (e) => {
      const data = JSON.parse(e.data);
      if (data.status === 'success' && data.event === 'SEND_CHAT') {
        console.log(data.data.mes);
        this.getUserInfo();
        this.getGroupInfo();
      }
    });
  }

  getOnlineInfo(): void {
    this.websocketService.checkOnline(this.username);
    this.onlineSubscription =
      this.websocketService.checkOnlineSubject.subscribe((data) => {
        this.isOnline = data;
      });
  }

  getUserInfo(): void {
    // Get user's messages
    this.websocketService.getMessagesFromPeople(this.username);
    this.peopleSubscription = this.websocketService.messagesPeople.subscribe(
      (data) => {
        this.messages = <Message[]>data;
        this.scrollToTop();
      }
    );
  }

  getGroupInfo(): void {
    // Get messages of group
    this.websocketService.getMessagesFromGroup(this.username);
    this.messagesGroupSubscription =
      this.websocketService.messagesGroup.subscribe((data) => {
        this.messages = <Message[]>data;
        this.scrollToTop();
      });

    // Get info of group
    this.websocketService.getInfoFromGroup(this.username);
    this.infoGroupSubscription = this.websocketService.infoGroup.subscribe(
      (data) => {
        this.owner = data.own;
        this.members = data.userList;
      }
    );
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

  hasRoute(route: string): boolean {
    return this.router.url === encodeURI(route + this.username);
  }

  sendChat(message: string) {
    if (this.type === 0) {
      this.websocketService.sendChatPerson(this.username, message);
      this.getUserInfo();
    } else if (this.type === 1) {
      this.websocketService.sendChatGroup(this.username, message);
      this.getGroupInfo();
    }
  }

  scrollToTop(): void {
    const ulElement = <HTMLUListElement>this.ul.nativeElement;
    ulElement.scrollTop = ulElement.scrollHeight;
  }

  ngOnDestroy(): void {
    if (this.onlineSubscription) {
      this.onlineSubscription.unsubscribe();
    }
    if (this.peopleSubscription) {
      this.peopleSubscription.unsubscribe();
    }
    if (this.messagesGroupSubscription) {
      this.messagesGroupSubscription.unsubscribe();
    }
    if (this.infoGroupSubscription) {
      this.infoGroupSubscription.unsubscribe();
    }
  }
}
