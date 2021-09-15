import { UiServiceService } from './../../services/ui-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { WebsocketService } from './../../services/websocket.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription: Subscription;
  isCollapse: boolean = false;

  constructor(private websocketService: WebsocketService, private uiService: UiServiceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.websocketService.getUsers();
    this.subscription = this.websocketService.usersSubject.subscribe(
      (value) => {
        this.users = value;
      }
    );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  collapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  createGroup(groupName: string): void {
    this.websocketService.createGroup(groupName);
    this.websocketService.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'CREATE_ROOM') {
        this.getUsers();
      }
    });
  }

  joinGroup(groupName: string): void {
    this.websocketService.joinGroup(groupName);
    this.websocketService.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'JOIN_ROOM') {
        this.getUsers();
      }
    });
  }
}
