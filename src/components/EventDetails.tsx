import { Calendar, MapPin, Users, Ticket, Bell } from 'lucide-react';

interface EventDetailsProps {
  date: string;
  endDate: string;
  location: string;
  address: string;
  attendees: number;
  interested: number;
  isReminded: boolean;
  onReminderChange: (value: boolean) => void;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });
};

export const EventDetails = ({
  date,
  endDate,
  location,
  address,
  attendees,
  interested,
  isReminded,
  onReminderChange
}: EventDetailsProps) => {
  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-3 text-palette-secondary">
        <Calendar className="h-5 w-5 text-palette-tertiary" />
        <div>
          <div>{formatDate(date)}</div>
          <div className="text-sm text-palette-tertiary">
            {formatTime(date)} - {formatTime(endDate)}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 text-palette-secondary">
        <MapPin className="h-5 w-5 text-palette-tertiary" />
        <div>
          <div>{location}</div>
          <div className="text-sm text-palette-tertiary">{address}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 text-palette-secondary">
        <Users className="h-5 w-5 text-palette-tertiary" />
        <div>
          <div>{attendees} attending • {interested} interested</div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 px-6 py-3 bg-palette-btn-bg text-palette-btn-text rounded-lg hover:bg-palette-btn-bg-hover transition-colors flex items-center justify-center gap-2">
          <Ticket className="h-5 w-5" />
          Get Tickets
        </button>
        <button 
          className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
            isReminded
              ? 'bg-palette-bg text-palette-primary'
              : 'bg-palette-card border border-palette-border text-palette-primary hover:bg-palette-hover'
          }`}
          onClick={() => onReminderChange(!isReminded)}
        >
          <Bell className="h-5 w-5" />
          {isReminded ? 'Reminded' : 'Remind Me'}
        </button>
      </div>
    </div>
  );
}; 