import React, { useState } from 'react';
import { 
  Bell, 
  MessageCircle, 
  Home, 
  Users, 
  Menu, 
  X,
  Settings,
  HelpCircle
} from 'lucide-react';
import { Link } from '../ui/Link';
import { NavLink } from '../navigation/NavLink';
import { SearchInput } from '../navigation/SearchInput';
import { ProfileMenu } from '../navigation/ProfileMenu';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/search', icon: Users, label: 'Friends' },
    { href: '/messages', icon: MessageCircle, label: 'Messages' },
    { href: '/notifications', icon: Bell, label: 'Notifications', notificationCount: 3 },
  ];

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-blue-600 text-2xl font-bold">connect</span>
            </Link>
          </div>

          {/* Center section - Search and Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="w-full flex items-center gap-6 w-full">
              <div className="flex items-center gap-1 self-center w-full justify-center">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    notificationCount={item.notificationCount}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition">
                <HelpCircle className="h-5 w-5" />
              </button>
              <div className="h-6 w-px bg-gray-200 mx-1"></div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 transition">
                <img
                  src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </button>
              <ProfileMenu />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3">
            <SearchInput isMobile />
          </div>
          
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                notificationCount={item.notificationCount}
                isMobile
              />
            ))}
          </div>
          
          <ProfileMenu isMobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;