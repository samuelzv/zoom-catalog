import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UsersResolver} from './services/users.resolver';

const ROUTES: Routes = [
  {
    path: 'list',
    component: UsersListComponent,
    resolve: {
      users: UsersResolver
    }
  }
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class UsersRoutingModule {
}
