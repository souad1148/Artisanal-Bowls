export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  isBestseller: boolean;
  liked: boolean;   // ✅ AJOUT OBLIGATOIRE
}
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}