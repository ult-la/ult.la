import { Globe, Lock, Heart, Share2 } from 'lucide-react';

interface EventHeaderProps {
  title: string;
  image: string;
  category: string;
  privacy: string;
  price: number;
  isAttending: boolean;
  onAttendingChange: (value: boolean) => void;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

export const EventHeader = ({
  title,
  image,
  category,
  privacy,
  price,
  isAttending,
  onAttendingChange
}: EventHeaderProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-[400px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
          <button 
            className={`p-2 rounded-full transition-colors ${
              isAttending
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onAttendingChange(!isAttending)}
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <div className="mt-2 flex items-center gap-2 text-gray-500">
              {privacy === 'public' ? (
                <Globe className="h-4 w-4" />
              ) : (
                <Lock className="h-4 w-4" />
              )}
              <span className="text-sm capitalize">{privacy} Event</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{formatPrice(price)}</div>
            <div className="text-sm text-gray-500">per person</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 