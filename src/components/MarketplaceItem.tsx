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
        className={`bg-palette-card rounded-xl border border-palette-border overflow-hidden hover:shadow-md transition-shadow ${
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
                ? 'bg-red-500 text-palette-btn-text' 
                : 'bg-palette-card bg-opacity-90 text-palette-primary'
            }`}
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-palette-primary">{item.title}</h3>
              <p className="text-2xl font-bold text-palette-accent mt-1">{formatPrice(item.price)}</p>
            </div>
            <span className="px-2 py-1 bg-palette-bg-tertiary text-palette-primary text-xs font-medium rounded">
              {item.condition}
            </span>
          </div>
          
          <div className="mt-4 space-y-2 text-sm text-palette-tertiary">
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
                <div className="text-sm font-medium text-palette-primary">{item.seller.name}</div>
                <div className="text-xs text-palette-tertiary">★ {item.seller.rating}</div>
              </div>
            </div>
            
            <button className="flex items-center gap-1 px-4 py-2 bg-palette-btn-bg text-palette-btn-text rounded-lg hover:bg-palette-btn-bg-hover transition-colors text-sm font-medium">
              <MessageCircle className="h-4 w-4" />
              Contact
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}; 