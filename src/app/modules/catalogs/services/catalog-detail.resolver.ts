import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve
} from '@angular/router';

import {CatalogsService} from './catalogs.service';
import {Observable} from 'rxjs';
import {ICatalog} from '../model/catalog';

@Injectable()
export class CatalogDetailResolver implements Resolve<Observable<ICatalog>> {
  constructor(private catalogsService: CatalogsService) {
  }

  resolve(activatedRoute: ActivatedRouteSnapshot): Observable<ICatalog>  {
    const id = activatedRoute.params.id;

    return this.catalogsService.getCatalog(id);
  }
}
