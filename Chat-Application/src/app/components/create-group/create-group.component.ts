import { uiAnim } from './../../animations';
import { UiServiceService } from './../../services/ui-service.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  animations: [
    uiAnim
  ]
})
export class CreateGroupComponent implements OnInit,OnDestroy {
  isShowCreateGroup: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiServiceService) {
    
   }

  ngOnInit(): void {
    this.subscription = this.uiService.getCreateGroupSubject()
                        .subscribe((value) => {
                          this.isShowCreateGroup = value;
                        })
  }

  closeCreateGroup(): void {
    this.uiService.showCreateGroup();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
