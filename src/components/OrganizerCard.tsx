import { Star } from 'lucide-react';

interface Organizer {
  name: string;
  avatar: string;
  verified: boolean;
  events: number;
  followers: number;
}

interface OrganizerCardProps {
  organizer: Organizer;
}

export const OrganizerCard = ({ organizer }: OrganizerCardProps) => {
  return (
    <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
      <div className="flex items-start gap-4">
        <img
          src={organizer.avatar}
          alt={organizer.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-palette-primary">{organizer.name}</h3>
            {organizer.verified && (
              <div className="text-blue-500">
                <Star className="h-4 w-4 fill-current" />
              </div>
            )}
          </div>
          <div className="mt-2 text-sm text-palette-tertiary">
            <div>{organizer.events} events • {organizer.followers.toLocaleString()} followers</div>
          </div>
          <button className="mt-3 w-full px-4 py-2 bg-palette-bg text-palette-primary rounded-lg hover:bg-palette-hover transition-colors text-sm font-medium">
            Follow Organizer
          </button>
        </div>
      </div>
    </div>
  );
}; 