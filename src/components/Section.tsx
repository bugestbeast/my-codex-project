import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Listing } from '@/data/listings';
import ListingCard from './ListingCard';

interface Props {
  title: string;
  listings: Listing[];
}

const Section: React.FC<Props> = ({ title, listings }) => {
  return (
    <section className="mt-8 px-4">
      <button className="flex items-center justify-between w-full mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <div className="flex gap-4 overflow-x-auto snap-x">
        {listings.map((l) => (
          <div key={l.id} className="snap-start">
            <ListingCard listing={l} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
