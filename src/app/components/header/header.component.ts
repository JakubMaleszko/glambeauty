import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_ITEMS, HeaderItem } from './HEADER_ITEMS';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  readonly headerItems: HeaderItem[] = HEADER_ITEMS;

  mobile(): void {
    const navbar = document.querySelector<HTMLElement>(".navbar");
    const menu = document.querySelector<HTMLElement>(".navbar-menu");
    if (menu && navbar) {
      menu.style.display = "flex";
      navbar.style.alignItems = "baseline";
      navbar.style.height = "fit-content";
    }
    
  }

}
