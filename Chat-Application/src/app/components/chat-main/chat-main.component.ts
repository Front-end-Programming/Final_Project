import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss'],
})
export class ChatMainComponent implements OnInit {

  isShowUsername: boolean = false;
  isExpandInfo: boolean = true;
  isCollapse: boolean = false;

  messages: any[] = [
    {
      id: 11853,
      name: 'Auypro',
      type: 0,
      to: 'duy1',
      mes: '?',
      createAt: '2021-08-27 10:36:21',
    },
    {
      id: 11852,
      name: 'duy1',
      type: 0,
      to: 'duypro',
      mes: 'LALALALALALALALALALA',
      createAt: '2021-08-27 10:36:02',
    },
    {
      id: 11410,
      name: 'duypro',
      type: 0,
      to: 'duy1',
      mes: 'special messagespecial message',
      createAt: '2021-08-24 22:03:31',
    },

    {
      id: 11410,
      name: 'duypro',
      type: 0,
      to: 'duy1',
      mes: 'special messagespecial message',
      createAt: '2021-08-24 22:03:31',
    },


    {
      id: 11410,
      name: 'duy1',
      type: 0,
      to: 'duy1',
      mes: 'special messagespecial message',
      createAt: '2021-08-24 22:03:31',
    },

    {
      id: 11410,
      name: 'duypro',
      type: 0,
      to: 'duy1',
      mes: 'special messagespecial message',
      createAt: '2021-08-24 22:03:31',
    },

    {
      id: 11410,
      name: 'duy1',
      type: 0,
      to: 'duy1',
      mes: 'special messagespecial message',
      createAt: '2021-08-24 22:03:31',
    },

    {
      id: 11410,
      name: 'duypro',
      type: 0,
      to: 'duy1',
      mes: 'special messagespecial messagespecial messagespecial messagespecial messagespecial messagespecial messagespecial messagespecial messagespecial message',
      createAt: '2021-08-24 22:03:31',
    }
  ];

  

  constructor() {}

  ngOnInit(): void {}

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
