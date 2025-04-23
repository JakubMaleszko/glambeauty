import { Component, input, signal } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-expanding-element',
  imports: [],
  templateUrl: './expanding-element.component.html',
  styleUrl: './expanding-element.component.scss',
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ opacity: 0, }),
        animate('0.3s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in-out', style({ opacity: 0 })),
        style({ opacity: 1 })
      ])
    ]),
    trigger('arrow', [
      state('off', style({ transform: 'rotate(0deg)' })),
      state('on', style({ transform: 'rotate(180deg)' })),
      transition('off => on', animate('300ms ease-out')),
      transition('on => off', animate('300ms ease-in')),
    ])
  ]
})
export class ExpandingElementComponent {
  header = input.required<string>();
  isExpanded = signal<boolean>(false);
  toggle(): void {
    this.isExpanded.set(!this.isExpanded());
  }
}
