import {Component} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';

import {ICatalog} from '../../model/catalog';

@Component({
	selector: 'zoom-catalog-detail',
	templateUrl: './catalog-detail.component.html',
	styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent {
  catalog: ICatalog;
  navigationSubscription: any;

	constructor(private route: ActivatedRoute, private router: Router) {
    this.catalog = this.route.snapshot.data.catalog;

    this.navigationSubscription = this.router.events
      .subscribe((e: any) => {
      // on Navigation End refresh the component
      if (e instanceof NavigationEnd) {
        this.refreshCatalog();
      }
    });
	}
  refreshCatalog() {
    this.catalog = this.route.snapshot.data.catalog;
  }
}
