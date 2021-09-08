import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-light-dark',
  templateUrl: './light-dark.component.html',
  styleUrls: ['./light-dark.component.scss']
})
export class LightDarkComponent implements OnInit {
  
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

}
