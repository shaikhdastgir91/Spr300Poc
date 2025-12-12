import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { User } from './user.model';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
};

export const usersReducer = createReducer(
  initialState,

  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loading: true
  })),

  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loading: false
  })),

  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  }))
);
