import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_ITEMS, HeaderItem } from './HEADER_ITEMS';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('open', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ])
  ]
})

export class HeaderComponent {
  readonly headerItems: HeaderItem[] = HEADER_ITEMS;
  isOpen = signal<boolean>(false);
  mobile(): void {
    this.isOpen.set(!this.isOpen());
  }
}
