import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-grid.html'
})
export class ProductsGridComponent {
    @ViewChild('scrollContainer', { static: false })
  scrollContainer!: ElementRef<HTMLDivElement>;

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  }

  products: Product[] = [
    { id: 1, name: 'Moroccan Heritage Bowls', price: 150, image: '/assets/image1.png', rating: 4.9, reviews: 50, isBestseller: true , liked: false},
    { id: 2, name: 'Volcanic Clay Vessel', price: 200, image: '/assets/image2.png', rating: 4.8, reviews: 30, isBestseller: false, liked: false },
    { id: 3, name: 'Sunset Glaze Bottle', price: 160, image: '/assets/iamge.png', rating: 4.9, reviews: 40, isBestseller: true, liked: true },
    { id: 4, name: 'Minimal Stoneware Set', price: 180, image: "/assets/Image (Artisan's Choice).png", rating: 4.7, reviews: 20, isBestseller: false, liked: false },
    { id: 5, name: 'Earth Tone Pottery Vase', price: 120, image: 'assets/image 3.png', rating: 4.9, reviews: 50, isBestseller: true , liked: false}
  ];
  toggleLike(product: Product): void {
    product.liked = !product.liked;
  }

  /* ================= CHECKOUT MODAL ================= */
  showCheckout = false;
  selectedProduct: Product | null = null;

  buy(product: Product): void {
    this.selectedProduct = product;
    this.showCheckout = true;
  }

  closeCheckout(): void {
    this.showCheckout = false;
    this.selectedProduct = null;
  }

  confirmOrder(): void {
    console.log('Order confirmed for:', this.selectedProduct);
    this.closeCheckout();
  }


}

