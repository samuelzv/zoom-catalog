import {Observable, of} from 'rxjs';

export class LoginService {
  private username = 'admin';
  private password = 'admin';

  // credentials hardcoded for demo purposes
  login(username: string, password: string): Observable<boolean> {
    const isValid = username === this.username && password === this.password;

    return of(isValid);
  }
}
