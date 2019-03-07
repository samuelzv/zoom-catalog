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
	MatDividerModule,
	MatInputModule,
	MatIconModule,
	MatGridListModule,
	MatListModule,
	MatRadioModule,
	MatSidenavModule,
	MatTableModule,
	MatToolbarModule,
	MatProgressBarModule,
	MatSnackBarModule,
	MatSelectModule,
	MatStepperModule,
	MAT_LABEL_GLOBAL_OPTIONS
} from '@angular/material';

const MODULES = [
	CommonModule,
	CdkTableModule,
	MatButtonModule,
	MatCardModule,
  MatChipsModule,
	MatDialogModule,
	MatDividerModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatGridListModule,
	MatListModule,
	MatProgressBarModule,
	MatRadioModule,
	MatSidenavModule,
	MatTableModule,
	MatToolbarModule,
	MatSnackBarModule,
	MatSelectModule,
	MatStepperModule
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
