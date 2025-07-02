import React from 'react';
import HeaderNav from '@/components/HeaderNav';
import SearchBar from '@/components/SearchBar';
import Section from '@/components/Section';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { popularLondon, availableParis } from '@/data/listings';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <HeaderNav />
      <main className="pt-20 max-w-6xl mx-auto">
        <SearchBar />
        <Section title="Popular homes in London" listings={popularLondon} />
        <Section title="Available places in Paris" listings={availableParis} />
      </main>
    </FavoritesProvider>
  );
};

export default App;
