import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar: React.FC = () => {
  const handleClick = () => {
    alert(
      JSON.stringify({ where: '', checkIn: '', checkOut: '', who: '' }, null, 2)
    );
  };
  return (
    <div className="mt-24 flex justify-center">
      <div className="shadow-md rounded-full overflow-hidden bg-white w-[880px] max-w-full grid grid-cols-5 text-sm">
        {['Where', 'Check in', 'Check out', 'Who'].map((label) => (
          <div
            key={label}
            className="px-4 py-3 hover:bg-muted cursor-pointer text-gray-600"
          >
            {label}
          </div>
        ))}
        <button
          onClick={handleClick}
          aria-label="search"
          className="flex items-center justify-center bg-primary text-white w-12 h-12 m-2 rounded-full"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
