import { uiAnim } from './../../animations';
import { UiServiceService } from './../../services/ui-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  constructor(private uiService: UiServiceService) {}

  ngOnInit(): void {
    this.subscription = this.uiService
      .getJoinGroupSubject()
      .subscribe((value) => {
        this.isShowJoinGroup = value;
        console.log({ value });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeJoinGroup(): void {
    this.uiService.showJoinGroup();
  }
}
