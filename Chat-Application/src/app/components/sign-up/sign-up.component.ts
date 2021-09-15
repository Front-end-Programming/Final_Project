import { Router } from '@angular/router';
import { WebsocketService } from './../../services/websocket.service';
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

  constructor(
    private websocketService: WebsocketService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  // Sign up
  onSignUp() {
    this.websocketService.onRegister(this.username, this.password);
    this.websocketService.ws.addEventListener('message', (event) => {
      if (
        JSON.parse(event.data).status === 'success' &&
        JSON.parse(event.data).event === 'REGISTER'
      ) {
        // 1. Navigate to sign-in component
        this.router.navigate(['/']);

        // 2. Show notification (toast message) for the success
      } else if (JSON.parse(event.data).status === 'error') {
        // Show error to user when username has already existed
        this.isExist = true;
      }
    });
  }
}
