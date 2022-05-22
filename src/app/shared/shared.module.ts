import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ValidationComponent } from './validation/validation.component';

@NgModule({
  declarations: [RadioInputComponent, ModalComponent, ValidationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RadioInputComponent, ModalComponent, ValidationComponent],
})
export class SharedModule {}
