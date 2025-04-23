import { Component } from '@angular/core';
import { ExpandingComponent } from "../../components/expanding/expanding.component";
import { ExpandingElementComponent } from "../../components/expanding-element/expanding-element.component";
import { servicesCategory, SERVICES } from "./SERVICES_ITEMS";

@Component({
  selector: 'app-services',
  imports: [ExpandingComponent, ExpandingElementComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: servicesCategory[] = SERVICES;
}
