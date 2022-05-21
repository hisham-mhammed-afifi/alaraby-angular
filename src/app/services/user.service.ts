import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getUrl() {
    return environment.apiRoot + 'users';
  }
  constructor(private http: HttpClient) {}

  signup(user: any): Observable<IUser> {
    return this.http.post<IUser>(this.getUrl(), user);
  }
}
