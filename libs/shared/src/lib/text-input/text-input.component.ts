import { Component, Input } from '@angular/core';

@Component({
  selector: 'hackathon-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() label = '';
  @Input() focus: boolean | undefined;
  @Input() password: boolean | undefined;
  @Input() success: boolean | undefined;
  @Input() errorMessage: string | undefined;
}
