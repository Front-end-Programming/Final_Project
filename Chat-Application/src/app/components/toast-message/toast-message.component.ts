import { slideIn } from './../../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  animations: [
    slideIn
  ]
})
export class ToastMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
