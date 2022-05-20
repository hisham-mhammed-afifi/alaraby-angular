import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css'],
})
export class RadioInputComponent implements OnInit {
  @Input() inputId: string = '';
  @Input() question: string = '';
  @Input() controlName: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}
