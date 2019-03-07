import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';

// TODO evalute modules
import {
	MatButtonModule,
	MatFormFieldModule,
	MatCardModule,
  MatChipsModule,
	MatDialogModule,
	MatInputModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatTableModule,
	MatToolbarModule,
	MAT_LABEL_GLOBAL_OPTIONS
} from '@angular/material';

const MODULES = [
	CommonModule,
	CdkTableModule,
	MatButtonModule,
	MatCardModule,
  MatChipsModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatTableModule,
	MatToolbarModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES,
	providers: [
		{
			provide: MAT_LABEL_GLOBAL_OPTIONS,
			useValue: {float: 'auto'}
		}
	],
	declarations: []
})
export class CustomMaterialModule {
}
