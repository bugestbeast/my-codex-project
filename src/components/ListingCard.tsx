import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Listing } from '@/data/listings';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
  listing: Listing;
}

const ListingCard: React.FC<Props> = ({ listing }) => {
  const { savedIds, toggle } = useFavorites();
  const saved = savedIds.includes(listing.id);
  return (
    <div className="w-64 xl:w-[255px]">
      <div className="relative">
        <img
          src={listing.img}
          alt={listing.title}
          className="rounded-lg w-full h-[210px] object-cover"
        />
        <span className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
          Guest favourite
        </span>
        <button
          onClick={() => toggle(listing.id)}
          className="absolute top-2 right-2 bg-white rounded-full p-1"
        >
          <HeartIcon
            className={`w-6 h-6 ${saved ? 'fill-primary text-primary' : ''}`}
          />
        </button>
      </div>
      <div className="pt-2 pb-4">
        <h3 className="text-sm font-medium truncate">{listing.title}</h3>
        <p className="text-xs text-gray-600">{listing.dateRange}</p>
        <p className="text-xs text-gray-600">• {listing.hostType}</p>
        <p className="text-sm">
          €{listing.priceEur} for {listing.nights} nights
        </p>
        <p className="text-sm">
          <span className="text-primary">★</span> {listing.rating}
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
