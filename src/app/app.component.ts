import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {FooterComponent} from './core/footer/footer.component';
import {NavbarComponent} from './core/navbar/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerceApp';
}
