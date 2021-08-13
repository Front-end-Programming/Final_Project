import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  isShowPassword: boolean = false;

  // Kiem tra ten nguoi dung va mat khau co dung hay khong
  isCorrect: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  
  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  // Sign in
  onSignIn() {
    this.isCorrect = !this.isCorrect;
  }

}
