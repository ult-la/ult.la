export interface SearchResult {
  id: string;
  name: string;
  mutualFriends: number;
  avatar: string;
  location: string;
  occupation: string;
  isFriend: boolean;
}

export const searchResults: SearchResult[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    mutualFriends: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'San Francisco, CA',
    occupation: 'Product Designer',
    isFriend: false
  },
  {
    id: '2',
    name: 'Michael Chen',
    mutualFriends: 2,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'New York, NY',
    occupation: 'Software Engineer',
    isFriend: true
  },
  {
    id: '3',
    name: 'Emma Wilson',
    mutualFriends: 8,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'London, UK',
    occupation: 'Marketing Manager',
    isFriend: false
  },
  {
    id: '4',
    name: 'James Rodriguez',
    mutualFriends: 3,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'Los Angeles, CA',
    occupation: 'UX Designer',
    isFriend: false
  },
  {
    id: '5',
    name: 'Sophia Lee',
    mutualFriends: 6,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'Chicago, IL',
    occupation: 'Content Creator',
    isFriend: true
  }
]; 