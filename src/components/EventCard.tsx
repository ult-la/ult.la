import { Calendar, MapPin, Users, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Event } from '@/data/events';
import { IconText } from './ui/IconText';

interface EventCardProps {
  event: Event;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date);
};

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link href={`/event`} className="bg-palette-card rounded-xl border border-palette-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <button 
          className={`absolute top-3 right-3 p-2 rounded-full ${
            event.saved 
              ? 'bg-blue-600 text-white' 
              : 'bg-palette-card bg-opacity-90 text-palette-primary'
          }`}
        >
          <Star className="h-5 w-5" />
        </button>
        <div className="absolute bottom-3 left-3 bg-palette-card px-2 py-1 rounded-lg text-sm font-medium">
          {event.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-palette-primary mb-2">{event.title}</h3>
        <p className="text-sm text-palette-secondary mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 text-sm text-palette-tertiary">
          <IconText icon={Calendar} text={formatDate(event.date)} />
          <IconText icon={MapPin} text={event.location} />
          <IconText icon={Users} text={`${event.attendees} attending`} />
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link href={`/event`} className="text-blue-600 text-sm font-medium hover:underline">
            View Details
          </Link>
          <Link href={`/event`} className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Join Event
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Link>
  );
}; 