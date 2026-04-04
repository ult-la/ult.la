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
  shortcutBgColor = 'bg-palette-bg-tertiary',
  shortcutTextColor = 'text-palette-accent'
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 text-palette-primary hover:bg-palette-hover hover:text-palette-accent rounded-lg transition-colors duration-150 ease-in-out"
    >
      {shortcutIcon ? (
        <div className={`w-8 h-8 ${shortcutBgColor} ${shortcutTextColor} rounded-lg flex items-center justify-center mr-3`}>
          {shortcutIcon}
        </div>
      ) : (
        <span className="text-palette-secondary group-hover:text-palette-accent mr-3">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default SidebarItem; 