export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  attendees: number;
  saved: boolean;
  category: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Design Conference 2025',
    description: 'Join us for the biggest design conference of the year! Network with industry leaders and learn about the latest trends in design.',
    date: '2025-03-15T09:00:00Z',
    location: 'San Francisco Convention Center',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    attendees: 234,
    saved: true,
    category: 'Design'
  },
  {
    id: '2',
    title: 'Tech Startup Meetup',
    description: 'Monthly meetup for tech entrepreneurs and startup enthusiasts. Share ideas, get feedback, and find potential collaborators.',
    date: '2025-02-28T18:30:00Z',
    location: 'Innovation Hub, Downtown',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    attendees: 85,
    saved: false,
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Photography Workshop',
    description: 'Learn advanced photography techniques from professional photographers. Hands-on sessions and equipment provided.',
    date: '2025-03-20T10:00:00Z',
    location: 'City Art Studio',
    image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    attendees: 42,
    saved: true,
    category: 'Photography'
  },
  {
    id: '4',
    title: 'Marketing Strategy Summit',
    description: 'A full-day summit focused on digital marketing strategies, SEO, and social media marketing.',
    date: '2025-04-05T09:30:00Z',
    location: 'Grand Hotel Conference Room',
    image: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    attendees: 156,
    saved: false,
    category: 'Marketing'
  }
]; 