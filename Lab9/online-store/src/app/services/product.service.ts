import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    categories: Category[] = [
        {id: 1, name: 'Футбол'},
        {id: 2, name: 'Баскетбол'},
        {id: 3, name: 'Теннис'},
        {id: 4, name: 'Фитнес'}
    ];

    products: Product[] = [
    {
    id: 1,
    name: 'Мяч Nike FB2901',
    description: 'Профессиональный футбольный мяч размера 5',
    price: 89900,
    rating: 5.0,
    image: 'images/footbro.jpg',
    images: ['images/footbro.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-nike-fb2901-dlja-futbola-razmer-5-117698297/?c=750000000',
    categoryId: 1,
    likes: 0
    },
    {
    id: 2,
    name: 'Бутсы adidas черный',
    description: 'Профессиональный футбольные бусты лучшей компании мира',
    price: 75200,
    rating: 4.9,
    image: 'images/butsi.jpg',
    images: ['images/butsi.jpg'],
    link: 'https://kaspi.kz/shop/p/butsy-adidas-mundial-team-019228-chernyi-46-106030560/?c=750000000',
    categoryId: 1,
    likes: 0
    },
    {
    id: 3,
    name: 'Футбольные щитки',
    description: 'Профессиональный футбольный щитки классные супер',
    price: 721,
    rating: 5.0,
    image: 'images/shitki.jpeg',
    images: ['images/shitki.jpeg'],
    link: 'https://kaspi.kz/shop/p/futbol-nyi-schitki-belyi-m-132702614/?c=750000000',
    categoryId: 1,
    likes: 0
    },
    {
    id: 4,
    name: 'Reusch Pure Contact',
    description: 'Профессиональные вратарские перчатки',
    price: 11749,
    rating: 5.0,
    image: 'images/perchi.jpg',
    images: ['images/perchi.jpg'],
    link: 'https://kaspi.kz/shop/p/reusch-pure-contact-chernyi-8-9-10-113639331/?c=750000000',
    categoryId: 1,
    likes: 0
    },
    {
    id: 5,
    name: 'Комплект Ronaldo',
    description: 'Футбольная форма Роналду красная 48',
    price: 16500,
    rating: 5.0,
    image: 'images/ronaldo.jpeg',
    images: ['images/ronaldo.jpeg'],
    link: 'https://kaspi.kz/shop/p/mjach-nike-fb2901-dlja-futbola-razmer-5-117698297/?c=750000000',
    categoryId: 1,
    likes: 0
    },
    {
    id: 6,
    name: 'Мяч Wilson NBA',
    description: 'Официальный мяч НБА размера 7',
    price: 29990,
    rating: 4.9,
    image: 'images/nba.jpeg',
    images: ['images/nba.jpeg'],
    link: 'https://kaspi.kz/shop/p/wilson-nba-100628255/',
    categoryId: 2,
    likes: 0
    },
    {
    id: 7,
    name: 'Кроссовки Nike AIR JORDAN 1 RETRO HIGH OG',
    description: 'Баскетбольные кроссовки белый, красный ',
    price: 66450,
    rating: 5.0,
    image: 'images/airjordan.jpg',
    images: ['images/airjordan.jpg'],
    link: 'https://kaspi.kz/shop/p/nike-air-jordan-123460/',
    categoryId: 2,
    likes: 0
    },
    {
    id: 8,
    name: 'Форма Lakers',
    description: 'Игровая форма Лос-Анджелес Лейкерс',
    price: 9990,
    rating: 4.7,
    image: 'images/lakers.jpg',
    images: ['images/lakers.jpg'],
    link: 'https://kaspi.kz/shop/p/komplekt-lakers-24-chernyi-165-120759409/?c=750000000',
    categoryId: 2,
    likes: 0
    },
    {
    id: 9,
    name: 'Стойка баскетбольная Atlanta M021-ART',
    description: 'Кольцо с сеткой для дома',
    price: 202000,
    rating: 5.0,
    image: 'images/kolso.jpg',
    images: ['images/kolso.jpg'],
    link: 'https://kaspi.kz/shop/p/atlanta-m021-art-110398004/?c=750000000',
    categoryId: 2,
    likes: 0
    },
    {
    id: 10,
    name: 'Комплект SPORTROOM NBA',
    description: 'Комплект Chicago Bulls красный 50,52',
    price: 12000,
    rating: 4.6,
    image: 'images/chicago.jpeg',
    images: ['images/chicago.jpeg'],
    link: 'https://kaspi.kz/shop/p/komplekt-sportroom-krasnyi-50-52-135291428/?c=750000000',
    categoryId: 2,
    likes: 0
    },


    {
    id: 11,
    name: 'Ракетка Wilson Blade 98',
    description: 'Профессиональная теннисная ракетка',
    price: 119900,
    rating: 4.9,
    image: 'images/raketka.jpg',
    images: ['images/raketka.jpg'],
    link: 'https://kaspi.kz/shop/p/wilson-blade-98-18x20-v8-0-unstr-wr078811-3-133197331/?c=750000000',
    categoryId: 3,
    likes: 0
    },
    {
    id: 12,
    name: 'Мячи Wilson US Open',
    description: 'Набор теннисных мячей (3 шт)',
    price: 4300,
    rating: 4.8,
    image: 'images/balls.jpg',
    images: ['images/balls.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-wilson-us-open-wrt106200-dlja-bol-shogo-tennisa-razmer-one-size-109316298/?c=750000000',
    categoryId: 3,
    likes: 0
    },
    {
    id: 13,
    name: 'Ракетка Yonex Ezone 98 (305 gr) Blast Blue 2025 08EZ98YX2 2',
    description: 'Профессиональная теннисная ракетка синий',
    price: 159900,
    rating: 5.0,
    image: 'images/raketka1.jpeg',
    images: ['images/raketka1.jpeg'],
    link: 'https://kaspi.kz/shop/p/yonex-ezone-98-305-gr-blast-blue-2025-08ez98yx2-2-134005424/?c=750000000',
    categoryId: 3,
    likes: 0
    },
    {
    id: 14,
    name: 'Обмотка Wilson ULTRA WRAP OVERGRIP x60, pink',
    description: 'Обмотка для ручки ракетки',
    price: 700,
    rating: 4.6,
    image: 'images/obmotka.jpg',
    images: ['images/obmotka.jpg'],
    link: 'https://kaspi.kz/shop/p/obmotka-wilson-ultra-wrap-overgrip-x60-pink-155345893/?c=750000000',
    categoryId: 3,
    likes: 0
    },
    {
    id: 15,
    name: 'Струны SOLINCO Hyper-G 1.25 зеленый',
    description: 'Струны для теннисной ракетки',
    price: 5900,
    rating: 4.5,
    image: 'images/strun.jpg',
    images: ['images/strun.jpg'],
    link: 'https://kaspi.kz/shop/p/solinco-hyper-g-1-25-zelenyi-112730677/?c=750000000',
    categoryId: 3,
    likes: 0
    },

    // КАТЕГОРИЯ 4: Фитнес (5 товаров)
    {
    id: 16,
    name: 'Гантели Starfit 10 кг',
    description: 'Разборные гантели для дома',
    price: 30490,
    rating: 4.6,
    image: 'images/gantelu.jpg',
    images: ['images/gantelu.jpg'],
    link: 'https://kaspi.kz/shop/p/nabor-gantelei-starfit-nerazbornaja-10-kg-101395482/?c=750000000',
    categoryId: 4,
    likes: 0
    },
    {
    id: 17,
    name: 'Коврик для йоги',
    description: 'Противоскользящий коврик',
    price: 53190,
    rating: 4.7,
    image: 'images/kovrik.jpg',
    images: ['images/kovrik.jpg'],
    link: 'https://kaspi.kz/shop/p/431919537-183-sm-fioletovyi-152279842/?c=750000000',
    categoryId: 4,
    likes: 0
    },
    {
    id: 18,
    name: 'Фитнес эспандер',
    description: 'Лента ARNAI ARNAI жгут зеленый 1 шт 57 кг',
    price: 2194,
    rating: 4.9,
    image: 'images/espander.jpg',
    images: ['images/espander.jpg'],
    link: 'https://kaspi.kz/shop/p/lenta-arnai-arnai-zhgut-zelenyi-1-sht-57-kg-145617083/?c=750000000',
    categoryId: 4,
    likes: 0
    },
    {
    id: 19,
    name: 'Скакалка профессиональная',
    description: 'Скоростная скакалка Venera online SG06 скоростная 300 см серый',
    price: 6990,
    rating: 5.0,
    image: 'images/ska.jpeg',
    images: ['images/ska.jpeg'],
    link: 'https://kaspi.kz/shop/p/venera-online-sg06-skorostnaja-300-sm-seryi-135291566/?c=750000000',
    categoryId: 4,
    likes: 0
    },
    {
    id: 20,
    name: 'Пояс для похудения',
    description: 'Неопреновый пояс для тренировок',
    price: 14900,
    rating: 4.8,
    image: 'images/poyas.jpg',
    images: ['images/poyas.jpg'],
    link: 'https://kaspi.kz/shop/p/massazher-lem-02-dlja-pohudenija-pojas-shiatsu-106634622/?c=750000000',
    categoryId: 4,
    likes: 0
    }
  ];

  getCategories(): Category[]{
    return this.categories
  }
  getProductsByCategory(categoryId: number): Product[]{
    return this.products.filter(p => p.categoryId === categoryId);
  }
  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if(index !== -1){
        this.products.splice(index, 1);
    }
  }
  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if(product) {
        product.likes += 1;
    }
  }
  getAllProducts(): Product[] {
  return this.products;
}
}
