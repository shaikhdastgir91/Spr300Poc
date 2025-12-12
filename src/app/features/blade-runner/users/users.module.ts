import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './users.reducer';
import { UsersEffects } from './users.effects';
import { UsersComponent   } from './user-list.component';

@NgModule({
  declarations: [UsersComponent ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [UsersComponent ]
})
export class UsersModule {}
