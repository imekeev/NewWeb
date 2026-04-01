import { Component, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnChanges {
  products = input.required<Product[]>();
  categoryName = input.required<string>();
  localProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('ProductListComponent ngOnChanges', changes);
    if (changes['products']) {
      console.log('products изменились, новые:', this.products());
      this.localProducts = [...this.products()];
    }
  }
  ngOnInit() {
    this.localProducts = [...this.products()];
  }

  onDeleteProduct(productId: number) {
    this.localProducts = this.localProducts.filter(p => p.id !== productId);
  }

  onLikeProduct(productId: number) {
    const product = this.localProducts.find(p => p.id === productId);
    if(product) {
      product.likes += 1;
      this.localProducts = [...this.localProducts];
    }
  }
}
