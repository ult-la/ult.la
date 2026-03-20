import { Filter } from 'lucide-react';

export const Filters = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button className="text-blue-600 text-sm font-medium hover:underline">Reset</button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
              placeholder="18"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
              placeholder="35"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>5 miles</option>
            <option>10 miles</option>
            <option>25 miles</option>
            <option>50 miles</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Looking For</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">Friendship</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">Dating</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">Long-term</span>
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