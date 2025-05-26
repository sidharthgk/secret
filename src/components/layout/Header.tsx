import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
      <div className="relative w-64">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-50 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-sm"
          placeholder="Search ..."
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-gray-600">
          <HelpCircle className="h-5 w-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;