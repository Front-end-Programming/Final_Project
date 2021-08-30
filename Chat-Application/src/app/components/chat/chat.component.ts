import { UiServiceService } from './../../services/ui-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  username: string = "Nguyen Hoang Duc Duy";

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
  }

  showJoinGroup(): void {
    this.uiService.showJoinGroup();
  }

  showCreateGroup(): void {
    this.uiService.showCreateGroup();
  }

}
