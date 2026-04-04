import { Heart, X, Star, MapPin, Music, Film, Coffee, Book, Gamepad } from 'lucide-react';
import { Profile } from '@/data/profiles';

interface ProfileCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
}

const getInterestIcon = (interest: string) => {
  switch (interest.toLowerCase()) {
    case 'music':
      return <Music className="h-4 w-4" />;
    case 'movies':
      return <Film className="h-4 w-4" />;
    case 'coffee':
      return <Coffee className="h-4 w-4" />;
    case 'reading':
      return <Book className="h-4 w-4" />;
    case 'gaming':
      return <Gamepad className="h-4 w-4" />;
    default:
      return null;
  }
};

export const ProfileCard = ({ profile, onSwipe }: ProfileCardProps) => {
  return (
    <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
      {/* Profile Card */}
      <div className="relative h-[600px]">
        <img
          src={profile.photos[0]}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        
        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-palette-btn-text">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
            {profile.verified && (
              <div className="bg-neutral-600 p-1 rounded-full">
                <Star className="h-4 w-4" />
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-2 text-gray-300">
            <MapPin className="h-4 w-4" />
            <span>{profile.distance}</span>
          </div>
          
          <p className="mt-2 text-gray-200">{profile.occupation}</p>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button 
            onClick={() => onSwipe('left')}
            className="p-4 bg-palette-card rounded-full shadow-lg hover:bg-palette-hover transition-colors"
          >
            <X className="h-6 w-6 text-palette-tertiary" />
          </button>
          <button
            onClick={() => onSwipe('right')}
            className="p-4 bg-palette-card rounded-full shadow-lg hover:bg-palette-hover transition-colors"
          >
            <Heart className="h-6 w-6 text-red-500" />
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6 border-t border-palette-border">
        <h3 className="text-lg font-semibold mb-2">About Me</h3>
        <p className="text-palette-secondary">{profile.bio}</p>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-palette-bg text-palette-primary rounded-full text-sm font-medium flex items-center gap-1"
            >
              {getInterestIcon(interest)}
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 