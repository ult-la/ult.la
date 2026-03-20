export interface Author {
  name: string;
  avatar: string;
}

export interface BaseFavorite {
  id: string;
  type: 'post' | 'article' | 'event' | 'photo';
  title: string;
  content: string;
  image: string;
  author?: Author;
  savedAt: string;
}

export interface PostFavorite extends BaseFavorite {
  type: 'post';
  likes: number;
  comments: number;
}

export interface ArticleFavorite extends BaseFavorite {
  type: 'article';
  readTime: string;
}

export interface EventFavorite extends BaseFavorite {
  type: 'event';
  date: string;
  location: string;
  attendees: number;
}

export interface PhotoFavorite extends BaseFavorite {
  type: 'photo';
  likes: number;
}

export type Favorite = PostFavorite | ArticleFavorite | EventFavorite | PhotoFavorite;

export const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'posts', name: 'Posts' },
  { id: 'photos', name: 'Photos' },
  { id: 'articles', name: 'Articles' },
  { id: 'events', name: 'Events' },
];

// Sample data - in a real app, this would come from an API or database
export const savedItems: Favorite[] = [
  {
    id: "1",
    type: "post",
    title: "Exciting news about our new product launch!",
    content: "We're thrilled to announce the launch of our latest product...",
    image: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg",
    author: {
      name: "John Doe",
      avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg"
    },
    likes: 245,
    comments: 32,
    savedAt: "2024-03-15T10:30:00Z"
  },
  {
    id: "2",
    type: "article",
    title: "The Future of Web Development",
    content: "Web development is evolving at an unprecedented pace...",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    author: {
      name: "Jane Smith",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    readTime: "5 min read",
    savedAt: "2024-03-14T15:45:00Z"
  },
  {
    id: "3",
    type: "event",
    title: "Tech Conference 2024",
    content: "Join us for the biggest tech conference of the year...",
    image: "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg",
    date: "2024-06-15",
    location: "San Francisco, CA",
    attendees: 500,
    savedAt: "2024-03-13T09:20:00Z"
  },
  {
    id: "4",
    type: "photo",
    title: "Beautiful Sunset",
    content: "Captured this amazing sunset at the beach...",
    image: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg",
    author: {
      name: "Mike Johnson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    likes: 189,
    savedAt: "2024-03-12T18:15:00Z"
  }
];


export const favorites: Favorite[] = [
  {
    id: '1',
    type: 'post',
    title: 'Amazing sunset at the beach',
    content: 'Captured this beautiful moment during my evening walk. The colors were absolutely breathtaking!',
    image: 'https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    savedAt: '2025-02-15T14:35:00Z',
    likes: 234,
    comments: 45
  },
  {
    id: '2',
    type: 'article',
    title: 'The Future of Web Development in 2025',
    content: 'An in-depth look at upcoming trends and technologies that will shape the web development landscape.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      name: 'Tech Insights',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    savedAt: '2025-02-14T10:20:00Z',
    readTime: '8 min read'
  },
  {
    id: '3',
    type: 'event',
    title: 'Annual Design Conference 2025',
    content: 'Join us for the biggest design conference of the year! Network with industry leaders and learn about the latest trends.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2025-03-15',
    location: 'San Francisco, CA',
    savedAt: '2025-02-13T16:45:00Z',
    attendees: 1234
  },
  {
    id: '4',
    type: 'photo',
    title: 'Urban Photography',
    content: 'Street art in downtown district',
    image: 'https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    savedAt: '2025-02-12T09:15:00Z',
    likes: 567
  }
]; 