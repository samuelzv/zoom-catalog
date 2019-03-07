import {NgModule} from '@angular/core';

import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {NotImplementedYetComponent} from './components/not-implemented-yet/not-implemented-yet.component';
import {UtilService} from './services/util.service';


@NgModule({
	imports: [
	  CustomMaterialModule
  ],
  declarations: [
    NotImplementedYetComponent
  ],
	exports: [
	  NotImplementedYetComponent
  ],
	providers: [
	  UtilService
	],
  entryComponents: [
    NotImplementedYetComponent
  ]
})
export class SharedModule {
}
