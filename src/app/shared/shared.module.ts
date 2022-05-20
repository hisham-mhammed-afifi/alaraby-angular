import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RadioInputComponent],
})
export class SharedModule {}
