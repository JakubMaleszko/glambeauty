import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [RouterLink, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  link = input<string | undefined>();
  router = input<string | any[] | undefined>();
}