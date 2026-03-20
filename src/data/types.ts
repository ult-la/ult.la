export interface Organizer {
  name: string;
  avatar: string;
  verified: boolean;
  events: number;
  followers: number;
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  role?: string;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate: string;
  location: string;
  address: string;
  image: string;
  attendees: number;
  interested: number;
  category: string;
  price: number;
  organizer: Organizer;
  privacy: string;
  tags: string[];
  schedule: ScheduleItem[];
  amenities: string[];
}

export interface EventsData {
  events: Event[];
} 