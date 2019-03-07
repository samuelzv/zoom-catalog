import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UsersService} from './services/users.service';
import {UsersResolver} from './services/users.resolver';


@NgModule({
	imports: [
		CommonModule,
		CustomMaterialModule,
		UsersRoutingModule,
	],
	providers: [
	  UsersService,
    UsersResolver
  ],
	declarations: [
	  UsersListComponent
  ],
	exports: [
	  UsersListComponent
  ]
})
export class UsersModule {
}
