import { Heart, MessageCircle, Clock, Calendar, Bookmark, Share2, Trash2, MoreHorizontal } from 'lucide-react';
import { Favorite } from '@/data/favorites';

interface FavoriteItemProps {
  item: Favorite;
  viewMode: 'grid' | 'list';
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

export const FavoriteItem = ({ item, viewMode }: FavoriteItemProps) => {
  return (
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
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-opacity">
            <Share2 className="h-4 w-4 text-gray-700" />
          </button>
          <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-opacity">
            <Trash2 className="h-4 w-4 text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-white bg-opacity-90 rounded-lg text-xs font-medium capitalize">
          {item.type}
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.content}</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          {item.author && (
            <div className="flex items-center gap-2">
              <img
                src={item.author.avatar}
                alt={item.author.name}
                className="h-6 w-6 rounded-full object-cover"
              />
              <span>{item.author.name}</span>
            </div>
          )}
          
          {item.type === 'post' && (
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {item.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                {item.comments}
              </span>
            </div>
          )}
          
          {item.type === 'article' && (
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {item.readTime}
            </span>
          )}
          
          {item.type === 'event' && (
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(item.date)}
            </span>
          )}
          
          {item.type === 'photo' && (
            <span className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {item.likes}
            </span>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Bookmark className="h-4 w-4" />
            Saved {new Date(item.savedAt).toLocaleDateString()}
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}; 