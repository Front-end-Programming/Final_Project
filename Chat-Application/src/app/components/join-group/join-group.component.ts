import { WebsocketService } from './../../services/websocket.service';
import { uiAnim } from './../../animations';
import { UiServiceService } from './../../services/ui-service.service';
import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss'],
  animations: [uiAnim],
})
export class JoinGroupComponent implements OnInit, OnDestroy {
  isShowJoinGroup: boolean = false;
  subscription: Subscription;
  groupName: string = '';
  isShowError: boolean = false;
  @Output() onJoinGroup: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private uiService: UiServiceService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.subscription = this.uiService
      .getJoinGroupSubject()
      .subscribe((value) => {
        console.log(value);
        this.isShowJoinGroup = value;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeJoinGroup(): void {
    this.uiService.closeJoinGroup();
    this.groupName = '';
    this.isShowError = false;
  }

  hideError(): void {
    this.isShowError = false;
  }

  onSubmit(): void {
    this.onJoinGroup.emit(this.groupName.trim());
    this.websocketService.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'JOIN_ROOM') {
        this.closeJoinGroup();
        this.groupName = '';
      } else if (data.status === 'error' && data.event === 'JOIN_ROOM') {
        this.isShowError = true;
      }
    });
  }
}
