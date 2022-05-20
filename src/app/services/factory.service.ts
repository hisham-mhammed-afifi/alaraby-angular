import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFactory } from '../models/ifactory';

@Injectable({
  providedIn: 'root',
})
export class FactoryService {
  private getUrl() {
    return environment.apiRoot + 'factories';
  }

  constructor(private http: HttpClient) {}

  allFactories(): Observable<IFactory[]> {
    return this.http.get<IFactory[]>(this.getUrl());
  }
}
