import { Component, OnInit } from '@angular/core';
import { AuthService, UserType } from '../auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user$: Observable<UserType>;

  constructor(private auth: AuthService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
