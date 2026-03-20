import React, { ReactNode } from 'react';
import { Link } from '../ui/Link';

interface SidebarItemProps {
  href: string;
  icon?: ReactNode;
  label: string;
  shortcutIcon?: ReactNode;
  shortcutBgColor?: string;
  shortcutTextColor?: string;
}

const SidebarItem = ({
  href,
  icon,
  label,
  shortcutIcon,
  shortcutBgColor = 'bg-blue-100',
  shortcutTextColor = 'text-blue-600'
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors duration-150 ease-in-out"
    >
      {shortcutIcon ? (
        <div className={`w-8 h-8 ${shortcutBgColor} ${shortcutTextColor} rounded-lg flex items-center justify-center mr-3`}>
          {shortcutIcon}
        </div>
      ) : (
        <span className="text-gray-500 group-hover:text-blue-600 mr-3">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default SidebarItem; 