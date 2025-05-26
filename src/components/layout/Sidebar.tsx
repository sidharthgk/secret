import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Megaphone,
  MessageSquare,
  Settings,
} from 'lucide-react';
import { UserProfile } from '../../types';

interface SidebarProps {
  userProfile: UserProfile;
}

const Sidebar: React.FC<SidebarProps> = ({ userProfile }) => {
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/',
    },
    {
      name: 'App Users',
      icon: <Users size={20} />,
      path: '/app-users',
    },
    {
      name: 'App Promotions',
      icon: <Megaphone size={20} />,
      path: '/app-promotions',
    },
    {
      name: 'Patient Feedback',
      icon: <MessageSquare size={20} />,
      path: '/patient-feedback',
    },
  ];

  const settingsSubItems = [
    {
      name: 'Plan Settings',
      icon: <Settings size={20} />,
      path: '/app-settings/plan-settings',
    },
    {
      name: 'Oral Health Tips',
      icon: <Settings size={20} />,
      path: '/app-settings/health-tips',
    },
    {
      name: 'Oral Health Guidelines',
      icon: <Settings size={20} />,
      path: '/app-settings/guidelines',
    },
  ];

  return (
    <div className="w-80 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="text-teal-500 font-semibold text-xl flex items-center">
            dps-uk
          </div>
        </div>
      </div>
      <nav className="flex-1 py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                  location.pathname === item.path ? 'bg-gray-100' : ''
                }`}
              >
                <span className="mr-3 text-gray-500">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          <li className="mb-1">
            <button
              className={`flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                location.pathname.startsWith('/app-settings') ? 'bg-gray-100' : ''
              }`}
              onClick={() => setSettingsOpen((open) => !open)}
              type="button"
            >
              <span className="mr-3 text-gray-500">
                <Settings size={20} />
              </span>
              <span>App Settings</span>
              <span className="ml-auto">
                {settingsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            {settingsOpen && (
              <ul className="ml-10 mt-1">
                {settingsSubItems.map((sub) => (
                  <li key={sub.name}>
                    <Link
                      to={sub.path}
                      className={`block px-2 py-2 text-gray-600 rounded hover:bg-gray-100 ${
                        location.pathname === sub.path ? 'bg-gray-200 font-medium' : ''
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-gray-500">{sub.icon}</span>
                        <span>{sub.name}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="mt-auto border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-600">
            {userProfile.name.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-sm">{userProfile.name}</div>
            <div className="text-xs text-gray-500">{userProfile.email}</div>
          </div>
          <button className="ml-auto">
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;