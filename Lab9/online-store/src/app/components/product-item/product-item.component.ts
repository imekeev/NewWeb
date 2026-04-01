import { Component, input, output, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, StarRating],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();
  like = output<number>();

  currentRating = signal<number>(0);
  onRatingChange(newRating: number) {
    this.currentRating.set(newRating);
  }
  OnDelete(){
    this.delete.emit(this.product().id);
  }
  OnLike(){
    this.like.emit(this.product().id);
  }

   shareViaWhatsApp(product: Product) {
    const text = encodeURIComponent(`Смотрите этот спортивный товар на Kaspi: ${product.name}`);
    const url = encodeURIComponent(product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareViaTelegram(product: Product) {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('kk-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
}
