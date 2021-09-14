import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  private isShowJoinGroup: boolean = false; 
  private isShowCreateGroup: boolean = false;
  private joinGroupSubject = new Subject<boolean>();
  private createGroupSubject = new Subject<boolean>();
  
  username: string = '';


  constructor() {}

  showJoinGroup(): void {
    this.isShowJoinGroup = !this.isShowJoinGroup;
    this.joinGroupSubject.next(this.isShowJoinGroup);
  }

  showCreateGroup(): void {
    this.isShowCreateGroup = !this.isShowCreateGroup;
    this.createGroupSubject.next(this.isShowCreateGroup);
  }

  getJoinGroupSubject(): Observable<boolean> {
    return this.joinGroupSubject;
  }

  getCreateGroupSubject(): Observable<boolean> {
    return this.createGroupSubject;
  }

  sendUsername(username: string): void {
    this.username = username;
  }
}
