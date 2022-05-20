import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMachine } from '../models/imachine';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  private getUrl() {
    return environment.apiRoot + 'machines';
  }

  constructor(private http: HttpClient) {}

  allMachines(): Observable<IMachine[]> {
    return this.http.get<IMachine[]>(this.getUrl());
  }
}
