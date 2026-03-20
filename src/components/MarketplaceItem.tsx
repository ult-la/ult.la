import { Heart, MapPin, MessageCircle } from 'lucide-react';
import { MarketplaceItem as MarketplaceItemType, ViewMode } from '@/types/marketplace';
import Link from 'next/link';

interface MarketplaceItemProps {
  item: MarketplaceItemType;
  viewMode: ViewMode;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

export const MarketplaceItem = ({ item, viewMode }: MarketplaceItemProps) => {
  return (
    <Link href={`/marketplace/item`} className="block">
      <div 
        className={`bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
          viewMode === 'list' ? 'flex' : ''
        }`}
      >
        <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <button 
            className={`absolute top-3 right-3 p-2 rounded-full ${
              item.saved 
                ? 'bg-red-500 text-white' 
                : 'bg-white bg-opacity-90 text-gray-700'
            }`}
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">{formatPrice(item.price)}</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
              {item.condition}
            </span>
          </div>
          
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {item.location}
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={item.seller.avatar}
                alt={item.seller.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-gray-900">{item.seller.name}</div>
                <div className="text-xs text-gray-500">★ {item.seller.rating}</div>
              </div>
            </div>
            
            <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              <MessageCircle className="h-4 w-4" />
              Contact
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}; 