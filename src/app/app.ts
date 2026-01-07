import { Component } from '@angular/core';

/* Composants standalone */
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProductsGridComponent } from './components/products-grid/products-grid';
import { AboutComponent } from './components/about/about';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { FeaturesComponent } from './components/features/features';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProductsGridComponent,
    AboutComponent,
    TestimonialsComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'artisanal-bowls';
}
