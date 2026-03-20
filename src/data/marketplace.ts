import { Category, MarketplaceItem } from '../types/marketplace';

export const categories: Category[] = [
  { id: 'all', name: 'All Categories' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'vehicles', name: 'Vehicles' },
  { id: 'property', name: 'Property' },
];

export const items: MarketplaceItem[] = [
  {
    id: '1',
    title: 'MacBook Pro 16" M2',
    price: 2199,
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    condition: 'Like New',
    seller: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8
    },
    saved: false
  },
  {
    id: '2',
    title: 'Modern Leather Sofa',
    price: 899,
    location: 'Los Angeles, CA',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'furniture',
    condition: 'Good',
    seller: {
      name: 'Sarah Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.6
    },
    saved: true
  },
  {
    id: '3',
    title: 'Vintage Leather Jacket',
    price: 150,
    location: 'Brooklyn, NY',
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'clothing',
    condition: 'Used',
    seller: {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9
    },
    saved: false
  },
  {
    id: '4',
    title: 'Tesla Model 3 2023',
    price: 39999,
    location: 'Miami, FL',
    image: 'https://images.pexels.com/photos/7674867/pexels-photo-7674867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'vehicles',
    condition: 'New',
    seller: {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.7
    },
    saved: true
  },
  {
    id: '5',
    title: 'Modern Studio Apartment',
    price: 2500,
    location: 'Chicago, IL',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'property',
    condition: 'Excellent',
    seller: {
      name: 'James Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.5
    },
    saved: false
  }
]; 