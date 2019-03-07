import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {UsersService} from './users.service';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private usersService: UsersService) {}

  resolve() {
    return this.usersService.getUsers();
  }
}
