import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {IProduct} from '../../shared/models/product.model';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books'];  // Add more categories as needed
  products: IProduct[] = [
    { id: 1, name: 'Product A', price: 20.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Electronics' },
    { id: 2, name: 'Product B', price: 50.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Clothing' },
    { id: 3, name: 'Product C', price: 30.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Home Appliances' },
    { id: 4, name: 'Product D', price: 40.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Electronics' },
    { id: 5, name: 'Product E', price: 60.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Clothing' },
    { id: 6, name: 'Product F', price: 25.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Home Appliances' },
    { id: 7, name: 'Product G', price: 15.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Sports' },
    { id: 8, name: 'Product H', price: 35.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Clothing' },
    { id: 9, name: 'Product I', price: 22.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Electronics' },
    { id: 10, name: 'Product J', price: 45.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Furniture' },
    { id: 11, name: 'Product K', price: 55.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Sports' },
    { id: 12, name: 'Product L', price: 70.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Home Appliances' },
    { id: 13, name: 'Product M', price: 50.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Electronics' },
    { id: 14, name: 'Product N', price: 80.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Clothing' },
    { id: 15, name: 'Product O', price: 90.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Furniture' },
    { id: 16, name: 'Product P', price: 110.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Electronics' },
    { id: 17, name: 'Product Q', price: 120.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Clothing' },
    { id: 18, name: 'Product R', price: 140.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Sports' },
    { id: 19, name: 'Product S', price: 160.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Home Appliances' },
    { id: 20, name: 'Product T', price: 180.0, image: 'https://picsum.photos/200', description: 'Short description', category: 'Electronics' }
  ];

  selectedCategory = '';
  sortOption = 'nameAsc';
  searchQuery = '';
  filteredProducts: IProduct[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filterProducts();
  }

  // Function to filter products based on search and category
  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      return (
        (this.selectedCategory ? product.category === this.selectedCategory : true) &&
        (this.searchQuery ? product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : true)
      );
    });

    // Sorting the filtered products based on selected option
    switch (this.sortOption) {
      case 'nameAsc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceAsc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }
  }

  // Function to handle star rating logic
  getStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating);
    }
    return stars;
  }
}
