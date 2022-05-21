import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecomendedComponent } from './recomended/recomended.component';
import { QuestionModalComponent } from './question-modal/question-modal.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionCardComponent,
    QuestionFormComponent,
    RecomendedComponent,
    QuestionModalComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
