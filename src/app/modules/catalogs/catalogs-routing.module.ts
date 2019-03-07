import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {CatalogDetailComponent} from './components/catalog-detail/catalog-detail.component';
import {CatalogDetailResolver} from './services/catalog-detail.resolver';

const ROUTES: Routes = [
  {
    path: 'detail/:id',
    component: CatalogDetailComponent,
    resolve: {
      catalog: CatalogDetailResolver
    }
  }
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class CatalogsRoutingModule {
}
