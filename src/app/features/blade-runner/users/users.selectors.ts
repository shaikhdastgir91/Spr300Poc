import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const selectUsersState =
  createFeatureSelector<UsersState>('users');

export const selectAllUsers = createSelector(
  selectUsersState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);
