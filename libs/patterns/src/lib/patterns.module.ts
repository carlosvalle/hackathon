import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '@hackathon/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SignInComponent],
  exports: [SignInComponent]
})
export class PatternsModule {}
