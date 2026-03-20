export interface FriendRequest {
  id: string;
  name: string;
  mutualFriends: number;
  avatar: string;
  location: string;
  occupation: string;
}

export const friendRequests: FriendRequest[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    mutualFriends: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'San Francisco, CA',
    occupation: 'Product Designer'
  },
  {
    id: '2',
    name: 'Michael Chen',
    mutualFriends: 2,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'New York, NY',
    occupation: 'Software Engineer'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    mutualFriends: 8,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'London, UK',
    occupation: 'Marketing Manager'
  }
]; 