import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {IUser} from '../model/user';

const httpOptions = {
  headers : new HttpHeaders(
    {
      'Content-Type': 'application/json',
    })
};

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    const url = `${environment.servicesURL}/users`;

    return this.http.get<IUser[]>(url, httpOptions);
  }
}
