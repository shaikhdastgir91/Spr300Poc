import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../features/blade-runner/users/user.service';
import * as UsersActions from '../../features/blade-runner/users/users.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  loadUsers$;

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UsersActions.loadUsers),
        mergeMap(() =>
          this.usersService.getUsers().pipe(
            map(users => UsersActions.loadUsersSuccess({ users })),
            catchError(error => of(UsersActions.loadUsersFailure({ error })))
          )
        )
      )
    );
  }
}
