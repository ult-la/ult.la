import React from 'react';
import { 
  User, 
  Users, 
  Bookmark, 
  Calendar, 
  Clock, 
  Heart,
  Star,
  FileText,
  ShoppingBag
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const LeftSidebar = () => {
  const sidebarItems = [
    { icon: <User className="h-5 w-5" />, label: 'Profile', href: '/profile' },
    { icon: <Users className="h-5 w-5" />, label: 'Friends', href: '/friend-requests' },
    { icon: <Bookmark className="h-5 w-5" />, label: 'Saved', href: '/saved' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Events', href: '/events' },
    { icon: <Clock className="h-5 w-5" />, label: 'Memories', href: '/saved' },
    { icon: <Heart className="h-5 w-5" />, label: 'Dating', href: '/dating' },
    { icon: <Star className="h-5 w-5" />, label: 'Favorites', href: '/favorites' },
    { icon: <FileText className="h-5 w-5" />, label: 'Pages', href: '/search' },
    { icon: <ShoppingBag className="h-5 w-5" />, label: 'Marketplace', href: '/marketplace' },
  ];

  const shortcuts = [
    {
      label: 'Tech Enthusiasts',
      href: '/groups',
      shortcutIcon: <span className="text-xs font-medium">T</span>,
      shortcutBgColor: 'bg-blue-100',
      shortcutTextColor: 'text-blue-600'
    },
    {
      label: 'Design Community',
      href: '/groups',
      shortcutIcon: <span className="text-xs font-medium">D</span>,
      shortcutBgColor: 'bg-purple-100',
      shortcutTextColor: 'text-purple-600'
    },
    {
      label: 'Travel Adventures',
      href: '/groups',
      shortcutIcon: <span className="text-xs font-medium">T</span>,
      shortcutBgColor: 'bg-green-100',
      shortcutTextColor: 'text-green-600'
    }
  ];
  
  return (
    <div className="w-full lg:w-64 px-4 py-4">
      <div className="space-y-1">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Your Shortcuts
        </h3>
        <div className="mt-3 space-y-1">
          {shortcuts.map((shortcut, index) => (
            <SidebarItem
              key={index}
              href={shortcut.href}
              label={shortcut.label}
              shortcutIcon={shortcut.shortcutIcon}
              shortcutBgColor={shortcut.shortcutBgColor}
              shortcutTextColor={shortcut.shortcutTextColor}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500">
        <div className="flex flex-wrap gap-2 px-3">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="/privacy" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="/settings" className="hover:underline">Advertising</a>
          <span>·</span>
          <a href="/settings" className="hover:underline">Cookies</a>
        </div>
        <p className="mt-2 px-3">© 2025 Connect</p>
      </div>
    </div>
  );
};

export default LeftSidebar;