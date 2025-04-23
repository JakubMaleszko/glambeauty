import { Component } from '@angular/core';
import { PricelistItem, PriceLIstCategory, PRICELIST } from './PRICELIST_ITEMS';

@Component({
  selector: 'app-pricelist',
  imports: [],
  templateUrl: './pricelist.component.html',
  styleUrl: './pricelist.component.scss'
})

export class PricelistComponent {
  readonly pricelist: PriceLIstCategory[] = PRICELIST;
}
