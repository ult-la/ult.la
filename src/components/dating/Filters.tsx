import { Filter } from 'lucide-react';

export const Filters = () => {
  return (
    <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button className="text-blue-600 text-sm font-medium hover:underline">Reset</button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-palette-primary mb-1">Age Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-20 px-3 py-1.5 border border-palette-border rounded-lg text-sm"
              placeholder="18"
            />
            <span className="text-palette-secondary">to</span>
            <input
              type="number"
              className="w-20 px-3 py-1.5 border border-palette-border rounded-lg text-sm"
              placeholder="35"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-palette-primary mb-1">Distance</label>
          <select className="w-full px-3 py-2 border border-palette-border rounded-lg text-sm">
            <option>5 miles</option>
            <option>10 miles</option>
            <option>25 miles</option>
            <option>50 miles</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-palette-primary mb-1">Looking For</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-palette-primary">Friendship</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-palette-primary">Dating</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-palette-primary">Long-term</span>
            </label>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
        <Filter className="h-4 w-4" />
        Apply Filters
      </button>
    </div>
  );
}; 