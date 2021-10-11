import { Component, Input } from '@angular/core';

@Component({
  selector: 'hackathon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {
  @Input() label: string | undefined;
  @Input() classes = '';
}
