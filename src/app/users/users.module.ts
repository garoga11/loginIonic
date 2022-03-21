import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';

import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule
  ],
  declarations: [UsersPage]
})
@Component({
  selector: 'users',
  templateUrl: 'users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPageModule {
  constructor() { }

}
