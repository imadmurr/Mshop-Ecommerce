import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {FooterComponent} from './core/footer/footer.component';
import {NavbarComponent} from './core/navbar/navbar/navbar.component';
import {AdminComponent} from './features/admin/admin.component';
import {NgIf} from '@angular/common';
import {HomeComponent} from './features/home/home.component';
import {ProductsComponent} from './features/products/products.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FooterComponent, NavbarComponent, AdminComponent, NgIf, HomeComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerceApp';
  showPageLayout: any;
}
