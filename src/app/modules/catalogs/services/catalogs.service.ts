import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {ICatalog} from '../model/catalog';

const httpOptions = {
  headers : new HttpHeaders(
    {
      'Content-Type': 'application/json',
    })
};

@Injectable()
export class CatalogsService {
  constructor(private http: HttpClient) {
  }

  getCatalog(id: number): Observable<ICatalog[]> {
    const url = `${environment.servicesURL}/photos/${id}`;

    return this.http.get<ICatalog[]>(url, httpOptions);
  }
  getRandomNumber(maxNumber: number = 200): number {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

}
