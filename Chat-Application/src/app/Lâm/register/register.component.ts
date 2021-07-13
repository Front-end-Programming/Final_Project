import { Component, OnInit } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faCamera = faCamera;

  constructor() { }

  ngOnInit(): void {
  }

}
