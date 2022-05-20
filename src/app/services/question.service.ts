import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../models/iquestion';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private getUrl() {
    return environment.apiRoot + 'questions';
  }

  constructor(private http: HttpClient) {}

  allQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.getUrl());
  }
}
