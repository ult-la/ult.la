import React from "react";
import { User, Bookmark, Settings, LogOut, HelpCircle } from "lucide-react";
import { Link } from "../ui/Link";

interface ProfileMenuProps {
  isMobile?: boolean;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  isMobile = false,
}) => {
  const menuItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/saved", icon: Bookmark, label: "Saved Items" },
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/privacy", icon: HelpCircle, label: "Help Center" },
    { href: "/logout", icon: LogOut, label: "Log out", isLogout: true },
  ];

  const renderMenuItem = (item: (typeof menuItems)[0], isMobile: boolean) => (
    <Link
      key={item.href}
      href={item.href}
      className={`flex items-center px-4 py-2.5 text-sm ${
        item.isLogout
          ? "text-red-600 hover:text-red-700 hover:bg-red-50"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
      } transition-colors duration-150`}
    >
      <item.icon className={`${isMobile ? "h-5 w-5" : "h-4 w-4"} mr-3`} />
      {item.label}
    </Link>
  );

  if (isMobile) {
    return (
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="px-4 flex items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">John Doe</div>
            <div className="text-sm font-medium text-gray-500">
              john@example.com
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          {menuItems.slice(0, -1).map((item) => renderMenuItem(item, true))}
          <div className="h-px bg-gray-200 my-2"></div>
          {renderMenuItem(menuItems[menuItems.length - 1], true)}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-blue-500"
            />
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-800">John Doe</div>
            <div className="text-xs font-medium text-gray-500">
              john@example.com
            </div>
          </div>
        </div>
      </div>
      <div className="py-1">
        {menuItems.slice(0, -1).map((item) => renderMenuItem(item, false))}
        <div className="h-px bg-gray-100 my-1"></div>
        {renderMenuItem(menuItems[menuItems.length - 1], false)}
      </div>
    </div>
  );
};
