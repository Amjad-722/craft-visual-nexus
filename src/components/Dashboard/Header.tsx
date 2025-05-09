
import React from 'react';
import { Search, Plus, Bell, Mail, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-dashboard-darker p-4 flex justify-between items-center">
      <div className="relative w-72">
        <input
          type="text"
          placeholder="Search products"
          className="w-full bg-dashboard-dark border border-dashboard-highlight rounded-md py-2 px-4 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
      </div>
      
      <div className="flex items-center gap-5">
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm flex items-center gap-1 transition-colors">
          <Plus size={16} /> Create New Project
        </button>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell size={18} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Mail size={18} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Settings size={18} />
          </button>
          
          <div className="flex items-center gap-2 text-sm text-white">
            <div className="w-8 h-8 rounded-full bg-blue-500 overflow-hidden">
              <img src="https://avatars.githubusercontent.com/u/159441246?v=4" alt="amjad ali" className="w-full h-full object-cover" />
            </div>
            <span>Amjad ALi</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
