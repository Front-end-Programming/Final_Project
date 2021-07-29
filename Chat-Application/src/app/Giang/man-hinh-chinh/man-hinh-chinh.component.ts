import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man-hinh-chinh',
  templateUrl: './man-hinh-chinh.component.html',
  styleUrls: ['./man-hinh-chinh.component.scss']
})
export class ManHinhChinhComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public register():void{

    this.router.navigate(['register'])


  }



}
