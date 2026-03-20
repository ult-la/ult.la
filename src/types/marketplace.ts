export interface Seller {
  name: string;
  avatar: string;
  rating: number;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  category: string;
  condition: string;
  seller: Seller;
  saved: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export type ViewMode = 'grid' | 'list'; 