import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent {
  currentIndex = 0;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ayoub Bourak',
      role: 'Restaurant Owner',
      quote:
        'We use these bowls in our restaurant and our customers always compliment them. The quality is exceptional and they elevate our food presentation.',
      avatar: '/assets/Image (Sarah Johnson).png',
      rating: 5,
    },
    {
      id: 2,
      name: 'Meryem Nassiri',
      role: 'Chef',
      quote:
        'The craftsmanship is absolutely stunning! Each piece feels unique and special. These bowls have become the centerpiece of my dining table.',
      avatar: '/assets/Image (Sarah Johnson)-1.png',
      rating: 5,
    },
    {
      id: 3,
      name: 'Asmae Nassim',
      role: 'Interior Designer',
      quote:
        'The craftsmanship is absolutely stunning! Each piece feels unique and special. These bowls have become the centerpiece of my dining table.',
      avatar: '/assets/Image (Sarah Johnson)-2.png',
      rating: 4
    }
  ];

  prev() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.testimonials.length - 1
        : this.currentIndex - 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.testimonials.length - 1
        ? 0
        : this.currentIndex + 1;
  }
}
