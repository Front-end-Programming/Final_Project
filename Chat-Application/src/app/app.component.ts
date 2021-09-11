import { WebsocketService } from './services/websocket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Animation
import { fader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})

export class AppComponent implements OnInit {

  
  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.onConnect();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
