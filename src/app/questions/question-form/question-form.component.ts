import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IAnswer } from 'src/app/models/ianswer';
import { IQuestion } from 'src/app/models/iquestion';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
})
export class QuestionFormComponent implements OnInit {
  questions: IQuestion[] = [];
  answers: IAnswer[] = [];
  answerIds: string[] = [];
  controls: any = {};
  loading: boolean = true;

  constructor(
    private questionsSrv: QuestionService,
    private answerSrv: AnswerService,
    private router: Router
  ) {}
  questionForm!: FormGroup;

  ngOnInit(): void {
    // questions
    this.questionsSrv.allQuestions().subscribe((data) => {
      this.questions = data;
      this.questions.forEach((q) => {
        this.controls[q._id] = new FormControl('');
      });
      this.questionForm = new FormGroup({
        ...this.controls,
      });
      this.loading = false;
    });
    // answers
    this.answerSrv.allAnswers().subscribe((data) => {
      this.answers = data;
      this.answerIds = data.map((a) => a._id);
    });
  }

  getQuestionAnswers(id: string) {
    const question = this.questions.find((q) => q._id === id);
    return this.answers.filter((a) => a.questionId === question?._id);
  }

  submit() {
    const { value } = this.questionForm;
    const ans = Object.values(value);
    const machineOne = ['62871b260b2f115392f8c00c'].some((element) => {
      return ans.includes(element);
    });
    const machineTwo = [
      '62871c2f0b2f115392f8c026',
      '62871c3d0b2f115392f8c02a',
    ].some((element) => {
      return ans.includes(element);
    });
    const machineThree = [
      '62871b1d0b2f115392f8c00a',
      '62871b470b2f115392f8c00e',
      '62871b4f0b2f115392f8c010',
    ].some((element) => {
      return ans.includes(element);
    });
    if (machineOne) {
      return this.router.navigate(['/recomended', 1]);
    }
    if (machineTwo) {
      return this.router.navigate(['/recomended', 2]);
    }
    if (machineThree) {
      return this.router.navigate(['/recomended', 3]);
    }
    return this.router.navigate(['/recomended', 0]);
  }
}
