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

  constructor(
    private websocketService: WebsocketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.websocketService.getUsers();
    this.subscription = this.websocketService.subject.subscribe((value) => {
      this.users = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  collapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  showMessage(type: number, name: string) {
    this.router.navigate([`chat-main/${type}/${name}`], { relativeTo: this.route });
  }
}
