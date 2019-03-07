import {Component} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {MatDialog} from '@angular/material';

import {NotImplementedYetComponent} from '../../../shared/components/not-implemented-yet/not-implemented-yet.component';
import {UtilService} from '../../../shared/services/util.service';

@Component({
	selector: 'zoom-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

	constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
	  private router: Router,
    private utilService: UtilService
  ) {}

  navigateToDetail(): void {
	  const path = ['catalogs', 'detail', this.utilService.getRandomNumber()];
	  this.router.navigate( path, {relativeTo: this.activatedRoute});
  }

  showNotImplemented(): void {
    const dialogRef = this.dialog.open(NotImplementedYetComponent);

    dialogRef.afterClosed().subscribe(_ => this.router.navigate(['/login']));
  }
}
