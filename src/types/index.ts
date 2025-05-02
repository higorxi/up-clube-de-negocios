export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  type: 'professional' | 'retailer';
  points: number;
  level: 'Bronze' | 'Prata' | 'Ouro' | 'Platina' | 'Diamante';
}

export interface Store {
  id: string;
  name: string;
  location: string;
  isCertified: boolean;
  description: string;
  coupons: Coupon[];
  featuredProducts: Product[];
  externalLinks: {
    website?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface ServiceProvider {
  id: string;
  name: string;
  profession: string;
  stars: number;
  isRecommended: boolean;
  description?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoId: string;
  completed: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  duration: number; // in hours
  points: number;
  date: string;
  isOnline: boolean;
  status: 'upcoming' | 'ongoing' | 'completed';
  location?: string;
  coverImage: string;
  category: string;
  instructor: string;
  updatedAt: string;
  isFeatured: boolean;
  lessons: Lesson[];
  learningObjectives: string[];
  targetAudience: string;
}
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  pointsForCheckin: number;
  imageUrl?: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  isAvailable: boolean;
  imageUrl?: string;
}

export interface Coupon {
  id: string;
  code: string;
  discount: string;
  validUntil: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export interface DonationItem {
  id: string;
  title: string;
  description: string;
  createdBy: {
    id: string;
    name: string;
  };
  createdAt: string;
  status: 'active' | 'fulfilled';
  contactInfo: string;
}