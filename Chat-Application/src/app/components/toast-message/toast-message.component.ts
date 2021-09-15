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
  isShowToast: boolean = false;
  private timeOut =  setTimeout(() => {
    this.isShowToast = false;
  }, 2000);

  constructor() { }

  ngOnInit(): void {
   
  }

  closeToast(): void {
    this.isShowToast = true;
    clearTimeout(this.timeOut);
  }
}
