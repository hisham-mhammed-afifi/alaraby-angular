import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [RadioInputComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RadioInputComponent, ModalComponent],
})
export class SharedModule {}
