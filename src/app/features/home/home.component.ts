import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {IProduct} from '../../shared/models/product.model';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProducts: IProduct[] = [
    { id: 1, name: 'Luxury Chair', price: 99, image: 'src/assets/placeholder.png', description:"",category:"",isNew: true },
    { id: 2, name: 'Wooden Table', price: 150,description:"",category:"", image: 'assets/images/table.png' },
    { id: 3, name: 'Modern Lamp', price: 45,description:"",category:"", image: 'assets/images/lamp.png', isNew: true }
  ];

  offers = [
    { icon: '🚚', title: 'Fast Delivery', description: 'Get your order in 2-3 days' },
    { icon: '💳', title: 'Secure Payment', description: '100% secure transactions' },
    { icon: '🔄', title: '30-Day Return', description: 'Hassle-free returns' }
  ];
}
