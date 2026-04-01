import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, FormsModule, ProductItemComponent],
  template: `
    <div class="app">
      <header class="header">
        <h1>🏆 Спортивный магазин на Kaspi.kz</h1>
        <p class="subtitle">Выберите категорию:</p>
      </header>

      <div class="categories">
        @for (category of categories; track category.id) {
          <button class="category-btn" 
                  [class.active]="selectedCategory?.id === category.id"
                  (click)="selectCategory(category)">
              {{ category.name }}
          </button>        
        }
      </div>
      <div class="global-search">
        <input type="text" 
               class="search-input" 
               placeholder="🔍 Поиск товаров во всех категориях..."
               [(ngModel)]="globalSearchTerm"
               (ngModelChange)="onSearchChange()">
      </div>
      @if (globalSearchTerm) {
        <div class="search-results-global">
          <h3>Результаты поиска "{{ globalSearchTerm }}"</h3>
          <p>Найдено товаров: {{ searchResults.length }}</p>
          
          @if (searchResults.length > 0) {
            <div class="products-grid">
              @for (product of searchResults; track product.id) {
                <app-product-item
                  [product]="product"
                  (delete)="onDeleteProduct($event)"
                  (like)="onLikeProduct($event)">
                </app-product-item>
              }
            </div>
          } @else {
            <div class="no-products">
              <p>😕 Ничего не найдено</p>
            </div>
          }
        </div>
      }
      @if (!globalSearchTerm) {
        @if (!selectedCategory) {
          <div class="welcome">
            <h2>👋 Добро пожаловать!</h2>
            <p>Выберите категорию спортивных товаров или воспользуйтесь поиском</p>
          </div>
        }
        
        @if (selectedCategory && !globalSearchTerm) {
          <app-product-list 
            [products]="getProductsForCategory()"
            [categoryName]="selectedCategory.name">
          </app-product-list>
        }
      }
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      background-color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .header {
      text-align: center;
      padding: 40px 20px 20px;
      color: black;
    }

    .header h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .subtitle {
      font-size: 1.2rem;
      opacity: 0.95;
    }

    .categories {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .category-btn {
      padding: 12px 30px;
      font-size: 1.1rem;
      border: none;
      border-radius: 50px;
      background: light-gray;
      color: #333;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .category-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }

    .category-btn.active {
      background: #667eea;
      color: white;
      transform: scale(1.05);
    }

    .welcome {
      text-align: center;
      padding: 80px 20px;
      color: black;
      animation: fadeIn 1s ease;
    }

    .welcome h2 {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .welcome p {
      font-size: 1.3rem;
      opacity: 0.9;
    }
  .search-input {
  width: 20%;
  padding: 12px 20px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: white;
}
  `]
})
export class App {
  categories: Category[];
  selectedCategory : Category | null = null;
  globalSearchTerm: string = '';
  searchResults: Product[] = [];
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts(); 
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.globalSearchTerm = '';
  }

  getProductsForCategory(): Product[] {
    if (!this.selectedCategory) return [];
    return this.productService.getProductsByCategory(this.selectedCategory.id);
  }

  onSearchChange() {
    if (!this.globalSearchTerm.trim()) {
      this.searchResults = [];
      return;
    }

    const searchLower = this.globalSearchTerm.toLowerCase().trim();
    this.searchResults = this.allProducts.filter(product => 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  }

  onDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId);
    this.onSearchChange();
    if (this.selectedCategory) {
      this.selectCategory(this.selectedCategory);
    }
  }

  onLikeProduct(productId: number) {
    this.productService.likeProduct(productId);
    this.onSearchChange(); 
  }
}

