import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../model/user';

@Component({
	selector: 'zoom-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  dataSource: IUser[];
  displayedColumns: string[] = ['name','username', 'email', 'address', 'phone', 'website', 'company'];

	constructor(private route: ActivatedRoute) {
	  this.dataSource = this.route.snapshot.data.users || [];
	}
}
