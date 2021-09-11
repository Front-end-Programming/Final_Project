import { Message } from './../models/message.model';
import { Observable, of, scheduled, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import {
  logOutCode,
  signUpCode,
  signInCode,
  getUsersCode,
  checkOnlineCode,
  getMessagesFromPeople
} from './../models/codes.model';

const url = 'ws://203.113.148.132:23023/chat/chat';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  ws: WebSocket;
  users: User[] = [];
  subject = new Subject<User[]>();
  checkOnlineSubject = new Subject<boolean>();
  messagesPeople: Observable<Message[]> = new Observable();
  constructor() {}

  // Open the connection
  onConnect(): void {
    this.ws = new WebSocket(url);
    this.ws.addEventListener('open', (value) => {
      console.log('Connected successfully.');
    });
  }


  onRegister(username: string, password: string): void {
    this.ws.send(signUpCode(username, password));
  }

  onSignIn(username: string, password: string): void {
    // Send to server
    this.ws.send(signInCode(username, password));
  }

  onLogOut(): void {
    this.ws.send(logOutCode);
  }

  getUsers() {
    this.ws.send(getUsersCode);
    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'GET_USER_LIST') {
        this.subject.next(JSON.parse(event.data).data);
      }
    });
  }

  checkOnline(name: string): void {
    this.ws.send(checkOnlineCode(name));
    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'CHECK_USER') {
        this.checkOnlineSubject.next(data.data.status);
      }
    });
  }

  getMessagesFromPeople(username: string): void {
    this.ws.send(getMessagesFromPeople(username));

    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'GET_PEOPLE_CHAT_MES') {
        // this.messagesPeople.next(data.data);
        this.messagesPeople = of(data.data);
      }
    })
  }
}
