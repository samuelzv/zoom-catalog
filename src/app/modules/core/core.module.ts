import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '../../app-routing.module';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './components/login/login/login.component';
import {LoginService} from './services/login.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@NgModule({
	imports: [
		CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    SharedModule,
	],
	declarations: [
	  LoginComponent,
    DashboardComponent
	],
	exports: [
		AppRoutingModule,
    LoginComponent
	],
  providers: [
    LoginService
  ]
})
export class CoreModule {
}
