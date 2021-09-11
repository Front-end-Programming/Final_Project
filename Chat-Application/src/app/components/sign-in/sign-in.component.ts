import { AuthService } from './../../services/auth.service';
import { UiServiceService } from './../../services/ui-service.service';
import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  isShowPassword: boolean = false;

  // Check the availability of username and password
  isCorrect: boolean = true;

  constructor(
    private router: Router,
    private websocketService: WebsocketService,
    private uiService: UiServiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  hideError() {
    this.isCorrect = true;
  }

  // Sign in
  onSignIn() {

    this.websocketService.onSignIn(this.username, this.password);
    this.websocketService.ws.addEventListener('message', (event) => {
      if (
        JSON.parse(event.data).status === 'success' &&
        JSON.parse(event.data).event === 'LOGIN'
      ) {

        this.uiService.sendUsername(this.username);

        this.authService.isAuthenticated = true;
        // Navigate to chat component
        this.router.navigate(['chat']);
        
      } else if (JSON.parse(event.data).status === 'error') {
        this.isCorrect = false;
      }
    });
  }
}
