import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserProfileComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
