import { WebsocketService } from './../../services/websocket.service';
import { uiAnim } from './../../animations';
import { UiServiceService } from './../../services/ui-service.service';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  animations: [uiAnim],
})
export class CreateGroupComponent implements OnInit, OnDestroy {
  isShowCreateGroup: boolean = false;
  subscription: Subscription;
  groupName: string = '';

  isShowError: boolean = false;
  @Output() onCreateGroup: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private uiService: UiServiceService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.subscription = this.uiService
      .getCreateGroupSubject()
      .subscribe((value) => {
        this.isShowCreateGroup = value;
      });
  }

  closeCreateGroup(): void {
    this.uiService.showCreateGroup();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  hideError(): void {
    this.isShowError = false;
  }

  onSubmit(): void {
    this.websocketService.createGroup(this.groupName.trim());
    this.websocketService.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'CREATE_ROOM') {
        this.onCreateGroup.emit(this.groupName.trim());
        this.groupName = '';
        this.closeCreateGroup();
      } else if (data.status === 'error' && data.event === 'CREATE_ROOM') {
        this.isShowError = true;
      }
    });
  }
}
