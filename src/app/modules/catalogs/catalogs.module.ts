import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogsRoutingModule} from './catalogs-routing.module';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {CatalogDetailComponent} from './components/catalog-detail/catalog-detail.component';
import {CatalogsService} from './services/catalogs.service';
import {CatalogDetailResolver} from './services/catalog-detail.resolver';


@NgModule({
	imports: [
		CommonModule,
		CustomMaterialModule,
		CatalogsRoutingModule,
	],
	providers: [
	  CatalogDetailResolver,
	  CatalogsService
  ],
	declarations: [
	  CatalogDetailComponent
  ],
	exports: [
	  CatalogDetailComponent
  ]
})
export class CatalogsModule {
}
