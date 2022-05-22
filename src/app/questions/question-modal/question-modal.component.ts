import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswerService } from 'src/app/services/answer.service';
import { ModalService } from 'src/app/services/modal.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css'],
})
export class QuestionModalComponent implements OnInit, OnDestroy {
  isQuestion: boolean = true;

  question = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50),
  ]);
  firstAnswer = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50),
  ]);
  secondAnswer = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50),
  ]);
  thirdAnswer = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50),
  ]);

  questionForm = new FormGroup({
    question: this.question,
    firstAnswer: this.firstAnswer,
    secondAnswer: this.secondAnswer,
    thirdAnswer: this.thirdAnswer,
  });

  constructor(
    public modal: ModalService,
    private questionSrv: QuestionService,
    private answerSrv: AnswerService
  ) {}

  ngOnInit(): void {
    this.modal.register('question');
  }

  addQuestion() {
    this.questionSrv
      .addQuestion({
        name: this.questionForm.value.question,
        factoryId: '62868e7d9fa1df3d619933b1',
        groupId: '6286901c8def178c9dcc1a35',
      })
      .subscribe({
        next: (data) => {
          this.addAnswers(data._id);
        },
      });
  }

  addAnswers(questionId: string) {
    this.answerSrv
      .addAnswer({ questionId, name: this.questionForm.value.firstAnswer })
      .subscribe({
        next: () => {
          this.answerSrv
            .addAnswer({
              questionId,
              name: this.questionForm.value.secondAnswer,
            })
            .subscribe({
              next: () => {
                this.answerSrv
                  .addAnswer({
                    questionId,
                    name: this.questionForm.value.thirdAnswer,
                  })
                  .subscribe({
                    next: () => {
                      alert('added successfully');
                      this.modal.toggle('question');
                    },
                  });
              },
            });
        },
      });
  }

  submit(e: Event) {
    if (this.isQuestion) {
      e.preventDefault();
      this.isQuestion = false;
    } else {
      this.addQuestion();
    }
  }

  ngOnDestroy(): void {
    this.modal.unregister('question');
  }
}
