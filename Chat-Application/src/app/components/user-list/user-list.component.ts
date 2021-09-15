import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isCollapse: boolean = false;
  constructor() { }

  ngOnInit(): void { }

  collapse(): void {
    this.isCollapse = !this.isCollapse;
  }

}
