import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  isMobile?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ isMobile = false }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  if (isMobile) {
    return (
      <div className="flex items-center bg-palette-bg rounded-full px-3 py-1.5">
        <Search className="h-5 w-5 text-palette-tertiary" />
        <input
          className="ml-2 flex-1 bg-transparent outline-none text-sm"
          placeholder="Search"
        />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center bg-palette-bg rounded-full px-3 py-1.5 transition-all duration-150 w-64 ${
      searchFocused ? 'ring-2 ring-blue-500 bg-palette-card' : ''
    }`}>
      <Search className="h-5 w-5 text-palette-tertiary" />
      <input
        className="ml-2 w-64 bg-transparent outline-none text-sm placeholder-palette-secondary"
        placeholder="Search Connect"
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
      />
    </div>
  );
}; 