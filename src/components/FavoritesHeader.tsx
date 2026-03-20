import { Star, Grid, List, Search, Filter } from 'lucide-react';

interface FavoritesHeaderProps {
  totalItems: number;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string }>;
}

export const FavoritesHeader = ({
  totalItems,
  viewMode,
  onViewModeChange,
  selectedCategory,
  onCategoryChange,
  categories
}: FavoritesHeaderProps) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Star className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Favorites</h1>
            <p className="text-sm text-gray-500">{totalItems} saved items</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search favorites..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <div className="flex border border-gray-200 rounded-lg">
              <button
                className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded-l-lg transition-colors`}
                onClick={() => onViewModeChange('grid')}
              >
                <Grid className="h-5 w-5 text-gray-500" />
              </button>
              <button
                className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded-r-lg transition-colors`}
                onClick={() => onViewModeChange('list')}
              >
                <List className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}; 