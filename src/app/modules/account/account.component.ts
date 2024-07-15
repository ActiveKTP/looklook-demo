import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService, UserType } from '../auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit, OnDestroy {
  user$: Observable<UserType>;

  private unsubscribe: Subscription[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
