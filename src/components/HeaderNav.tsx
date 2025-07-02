import React from 'react';
import {
  Bars3Icon,
  BellAlertIcon,
  GlobeAltIcon,
  HomeIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const HeaderNav: React.FC = () => {
  return (
    <header className="shadow-sm bg-white fixed top-0 left-0 right-0 h-20 flex items-center px-6 z-10">
      <div className="flex items-center w-full max-w-6xl mx-auto justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 text-primary"
            fill="currentColor"
          >
            <path d="M16 0C9.286 0 5.143 4.571 5.143 9.714c0 7.428 10.857 17.143 10.857 17.143s10.857-9.714 10.857-17.143C26.857 4.571 22.714 0 16 0z" />
          </svg>
        </div>
        <nav className="hidden lg:flex gap-8 text-sm">
          <button className="flex items-center gap-1 border-b-2 border-primary pb-1">
            <HomeIcon className="w-5 h-5" /> Homes
          </button>
          <button className="flex items-center gap-1 text-gray-500 relative">
            <span className="absolute -top-1 -right-4 text-xs text-primary">NEW</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
            Experiences
          </button>
          <button className="flex items-center gap-1 text-gray-500 relative">
            <span className="absolute -top-1 -right-4 text-xs text-primary">NEW</span>
            <BellAlertIcon className="w-5 h-5" /> Services
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden lg:block text-sm">
            Become a host
          </a>
          <button className="p-2 hover:bg-muted rounded-full">
            <GlobeAltIcon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-full">
            <UserCircleIcon className="w-8 h-8" />
          </button>
          <button className="lg:hidden p-2 hover:bg-muted rounded-full">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
