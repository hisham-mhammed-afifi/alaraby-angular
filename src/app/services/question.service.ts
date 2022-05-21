import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../models/iquestion';

interface addedQ {
  name: string;
  factoryId: string;
  groupId: string;
}

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

  addQuestion(question: addedQ): Observable<IQuestion> {
    return this.http.post<IQuestion>(this.getUrl(), question);
  }
}
