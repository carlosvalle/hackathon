import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    TextInputComponent
  ],
  exports: [
    ButtonComponent,
    TextInputComponent
  ]
})
export class SharedModule {}
