import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {CatalogsService} from './catalogs.service';

@Injectable()
export class CatalogDetailResolver implements Resolve<any> {
  constructor(private catalogsService: CatalogsService) {
  }

  resolve(activatedRoute: ActivatedRouteSnapshot)  {
    const id = activatedRoute.params.id;

    return this.catalogsService.getCatalog(id);
  }
}
