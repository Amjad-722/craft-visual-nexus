
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  SquareStack,
  FormInput, 
  Table, 
  BarChart3, 
  Image, 
  UserSquare, 
  FileText 
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, text: "Dashboard", active: true, path: "/" },
  { icon: SquareStack, text: "Basic UI Elements", path: "https://www.bardui.com", external: true },
  { icon: FormInput, text: "Form Elements", path: "https://www.w3schools.com/html/html_form_elements.asp", external: true },
  { icon: Table, text: "Tables", path: "https://www.google.com/search?q=data+tables", external: true },
  { icon: BarChart3, text: "Charts", path: "https://www.google.com/search?q=chart+libraries", external: true },
  { icon: Image, text: "Icons", path: "https://www.heroicons.com", external: true },
  { icon: UserSquare, text: "Upwork", path: "https://www.google.com/search?q=user+profile+templates", external: true },
  { icon: FileText, text: "Github", path: "https://github.com/Amjad-722", external: true },
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-dashboard-darker flex flex-col">
      <div className="p-5 border-b border-dashboard-highlight">
        <h1 className="text-xl font-bold text-white tracking-wider">DASHBOARD</h1>
      </div>

      <div className="p-4 border-b border-dashboard-highlight">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden">
            <img src="https://avatars.githubusercontent.com/u/159441246?v=4" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-white font-medium">Amjad ali</h3>
            <p className="text-xs text-gray-400">Fonder</p>
          </div>
        </div>
      </div>

      <div className="py-4 flex-1">
        <p className="px-6 py-2 text-xs text-white text-lg uppercase">Navigation</p>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className=''>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 border-1 text-sm transition-colors ${
                    item.active 
                      ? "text-blue-400 bg-dashboard-highlight border-l-2 border-blue-400" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
