import { Injectable } from '@angular/core';


const url = 'ws://203.113.148.132:23023/chat/chat';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  
  constructor() { }

  onConnect(): void {
    const ws = new WebSocket(url);
    ws.addEventListener('open', () => {
      console.log('Connected successfully.')
    })
  }

}
