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
      <div className="flex items-center gap-3 text-gray-600">
        <Calendar className="h-5 w-5 text-gray-400" />
        <div>
          <div>{formatDate(date)}</div>
          <div className="text-sm text-gray-500">
            {formatTime(date)} - {formatTime(endDate)}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 text-gray-600">
        <MapPin className="h-5 w-5 text-gray-400" />
        <div>
          <div>{location}</div>
          <div className="text-sm text-gray-500">{address}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 text-gray-600">
        <Users className="h-5 w-5 text-gray-400" />
        <div>
          <div>{attendees} attending • {interested} interested</div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Ticket className="h-5 w-5" />
          Get Tickets
        </button>
        <button 
          className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
            isReminded
              ? 'bg-gray-100 text-gray-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
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