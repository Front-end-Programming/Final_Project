import { Message } from './../models/message.model';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import * as codes from './../models/codes.model';

const url = 'ws://203.113.148.132:23023/chat/chat';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  ws: WebSocket;
  usersSubject = new Subject<User[]>();
  checkOnlineSubject = new Subject<boolean>();
  messagesPeople = new Subject<Message[]>();
  messagesGroup = new Subject<Message[]>();
  infoGroup = new Subject<any>();
  constructor() {}

  onConnect(): void {
    this.ws = new WebSocket(url);
    this.ws.addEventListener('open', (value) => {
      console.log('Connected successfully.');
    });
  }

  onRegister(username: string, password: string): void {
    this.ws.send(codes.signUpCode(username, password));
  }

  onSignIn(username: string, password: string): void {
    this.ws.send(codes.signInCode(username, password));
  }

  onLogOut(): void {
    this.ws.send(codes.logOutCode);
  }

  getUsers() {
    this.ws.send(codes.getUsersCode);
    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'GET_USER_LIST') {
        this.usersSubject.next(JSON.parse(event.data).data);
      }
    });
  }

  checkOnline(name: string): void {
    this.ws.send(codes.checkOnlineCode(name));
    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'CHECK_USER') {
        this.checkOnlineSubject.next(data.data.status);
      }
    });
  }

  getMessagesFromPeople(username: string): void {
    this.ws.send(codes.getMessagesFromPeopleCode(username));

    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'GET_PEOPLE_CHAT_MES') {
        this.messagesPeople.next(data.data.reverse());
      }
    });
  }

  getMessagesFromGroup(groupName: string): void {
    this.ws.send(codes.getMessagesFromGroupCode(groupName));

    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'GET_ROOM_CHAT_MES') {
        this.messagesGroup.next(data.data.chatData.reverse());
      }
    });
  }

  getInfoFromGroup(groupName: string): void {
    this.ws.send(codes.getInfoFromGroupCode(groupName));

    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.status === 'success' && data.event === 'GET_ROOM_CHAT_MES') {
        this.infoGroup.next(data.data);
      }
    });
  }

  sendChatPerson(username: string, message: string): void {
    this.ws.send(codes.sendChatPersonCode(username, message));
  }

  sendChatGroup(groupName: string, message: string): void {
    this.ws.send(codes.sendChatGroupCode(groupName, message));
  }

  createGroup(groupName: string): void {
    this.ws.send(codes.createGroupCode(groupName));
  }

  joinGroup(groupName: string): void {
    this.ws.send(codes.joinGroupCode(groupName));
  }
}
