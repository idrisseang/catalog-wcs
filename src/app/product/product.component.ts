import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: Product | null = null;
  @Output() onClickBuy: EventEmitter<Product> = new EventEmitter();

  buyProduct(product: Product): void {
    this.onClickBuy.emit(product);
  }
}
