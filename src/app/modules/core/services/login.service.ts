import {Observable, of} from 'rxjs';

export class LoginService {
  private username = 'admin';
  private password = 'admin';

  // TODO use observable
  login(username: string, password: string): Observable<boolean> {
    // credentials hardcoded for demo purposes
    const isValid = username === this.username && password === this.password;

    // return Promise.resolve(isValid);
    return of(isValid);
  }
}
