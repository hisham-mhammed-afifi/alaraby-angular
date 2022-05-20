import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAnswer } from '../models/ianswer';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private getUrl() {
    return environment.apiRoot + 'answers';
  }

  constructor(private http: HttpClient) {}

  allAnswers(): Observable<IAnswer[]> {
    return this.http.get<IAnswer[]>(this.getUrl());
  }
}
