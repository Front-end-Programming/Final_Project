import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  username: string = '';
  password: string = '';
  isShowPassword: boolean = false;

  // Kiem tra ten nguoi dung da ton tai hay chua
  isExist: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  // Sign up
  onSignUp() {
    this.isExist = !this.isExist;
  }
}
