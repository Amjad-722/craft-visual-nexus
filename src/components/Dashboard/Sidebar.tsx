
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
  { icon: FormInput, text: "Form Elements", path: "https://www.google.com/search?q=form+elements", external: true },
  { icon: Table, text: "Tables", path: "https://www.google.com/search?q=data+tables", external: true },
  { icon: BarChart3, text: "Charts", path: "https://www.google.com/search?q=chart+libraries", external: true },
  { icon: Image, text: "Icons", path: "https://www.heroicons.com", external: true },
  { icon: UserSquare, text: "User Pages", path: "https://www.google.com/search?q=user+profile+templates", external: true },
  { icon: FileText, text: "Documentation", path: "https://www.google.com/search?q=react+documentation", external: true },
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
            <p className="text-xs text-gray-400">Gold Member</p>
          </div>
        </div>
      </div>

      <div className="py-4 flex-1">
        <p className="px-6 py-2 text-xs text-gray-400 uppercase">Navigation</p>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                      item.active 
                        ? "text-blue-400 bg-dashboard-highlight border-l-2 border-blue-400" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                      item.active 
                        ? "text-blue-400 bg-dashboard-highlight border-l-2 border-blue-400" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.text}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
