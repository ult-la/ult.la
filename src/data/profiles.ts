export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  occupation: string;
  photos: string[];
  bio: string;
  interests: string[];
  verified: boolean;
}

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 28,
    location: 'San Francisco, CA',
    distance: '3 miles away',
    occupation: 'UX Designer',
    photos: [
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bio: "Creative soul with a passion for design and innovation. Looking for someone who appreciates art and isn't afraid to try new things.",
    interests: ['Design', 'Photography', 'Travel', 'Coffee', 'Music'],
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 31,
    location: 'New York, NY',
    distance: '5 miles away',
    occupation: 'Software Engineer',
    photos: [
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bio: "Tech enthusiast who loves solving problems and exploring new places. Seeking someone to share adventures and good conversations with.",
    interests: ['Technology', 'Hiking', 'Gaming', 'Food', 'Movies'],
    verified: true
  },
  {
    id: '3',
    name: 'Emma Wilson',
    age: 26,
    location: 'Los Angeles, CA',
    distance: '2 miles away',
    occupation: 'Marketing Manager',
    photos: [
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bio: "Adventure seeker with a love for spontaneous road trips and trying new restaurants. Looking for someone who can keep up!",
    interests: ['Travel', 'Food', 'Fitness', 'Reading', 'Photography'],
    verified: false
  }
]; 