import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  isCorrect: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  // Sign in
  onSignIn() {
    this.isCorrect = !this.isCorrect;
    this.router.navigate(['/chat']);

  }

}
