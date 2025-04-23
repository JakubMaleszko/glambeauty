import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  title = input.required<string>();
  imgPath = input.required<string>();
  imgAlt = input.required<string>();
  content = input.required<string>();
}
