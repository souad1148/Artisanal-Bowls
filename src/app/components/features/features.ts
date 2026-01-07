import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html'
})
export class FeaturesComponent {

  features = [
    {
      id: 1,
      title: 'Expert Artisans',
      description:
        'Learn From Master Craftspeople With Years Of Experience',
      icon: '/assets/Container-6.png'
    },
    {
      id: 2,
      title: 'Quality Assured',
      description:
        'All Classes Are Carefully Curated For The Best Learning Experience',
      icon: '/assets/Container-5.png'
    },
    {
      id: 3,
      title: 'Flexible Schedule',
      description:
        'Choose From Various Time Slots That Fit Your Schedule',
      icon: '/assets/Container-4.png'
    },
    {
      id: 4,
      title: 'Satisfaction Guaranteed',
      description:
        "Full Refund If You're Not Completely Satisfied",
      icon: '/assets/Container-3.png'
    }
  ];
}
