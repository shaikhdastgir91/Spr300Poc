import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UsersActions from './users.actions';
import { selectAllUsers, selectLoading } from './users.selectors';

@Component({
  selector: 'app-users',
  standalone:false,
  template: `
    <button (click)="load()">Load Users</button>

    <p *ngIf="loading$ | async">Loading...</p>

    <ul>
      <li *ngFor="let u of users$ | async">
        {{ u.name }}
      </li>
    </ul>
  `
})
export class UsersComponent implements OnInit {
  users$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {}

  load() {
    this.store.dispatch(UsersActions.loadUsers());
  }
}
