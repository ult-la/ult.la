export interface Group {
  id: string;
  name: string;
  category: string;
  members: number;
  image: string;
  description: string;
  privacy: 'Public' | 'Private';
  joined: boolean;
  activity: 'Very Active' | 'Active' | 'Moderate';
  lastActive: string;
}

export const groups: Group[] = [
  {
    id: '1',
    name: 'Tech Enthusiasts',
    category: 'tech',
    members: 1234,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A community for tech lovers to discuss the latest trends and innovations in technology.',
    privacy: 'Public',
    joined: true,
    activity: 'Very Active',
    lastActive: '2 hours ago'
  },
  {
    id: '2',
    name: 'Design Community',
    category: 'design',
    members: 856,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Share your work, get feedback, and connect with fellow designers from around the world.',
    privacy: 'Public',
    joined: false,
    activity: 'Active',
    lastActive: '5 hours ago'
  },
  {
    id: '3',
    name: 'Startup Founders',
    category: 'business',
    members: 543,
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A private group for startup founders to share experiences and advice.',
    privacy: 'Private',
    joined: true,
    activity: 'Very Active',
    lastActive: '1 hour ago'
  },
  {
    id: '4',
    name: 'Fitness & Wellness',
    category: 'health',
    members: 2341,
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Tips, motivation, and support for your fitness and wellness journey.',
    privacy: 'Public',
    joined: false,
    activity: 'Moderate',
    lastActive: '1 day ago'
  },
  {
    id: '5',
    name: 'Creative Arts',
    category: 'art',
    members: 987,
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A space for artists to showcase their work and discuss creative processes.',
    privacy: 'Public',
    joined: true,
    activity: 'Active',
    lastActive: '3 hours ago'
  }
]; 