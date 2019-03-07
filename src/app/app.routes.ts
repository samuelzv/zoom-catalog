import {Routes} from '@angular/router';

import {LoginComponent} from './modules/core/components/login/login/login.component';
import {DashboardComponent} from './modules/core/components/dashboard/dashboard.component';

export const routes: Routes = [
	{
		path: '',
    redirectTo: 'login',
    pathMatch: 'full'
	},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
      },
      {
        path: 'catalogs',
        loadChildren: './modules/catalogs/catalogs.module#CatalogsModule'
      }
    ],
    runGuardsAndResolvers: 'always'
  }
];
