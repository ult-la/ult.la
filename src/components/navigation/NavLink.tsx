import React from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "../ui/Link";

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  notificationCount?: number;
  isMobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon: Icon,
  label,
  notificationCount,
  isMobile = false,
}) => {
  if (isMobile) {
    return (
      <Link
        href={href}
        className="flex items-center px-4 py-3 text-base font-medium text-palette-secondary hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 ease-in-out border-b-2 border-transparent"
        activeClassName="text-blue-600 border-blue-600 font-semibold border-blue-500 border-b"
      >
        <Icon className="h-5 w-5 mr-3" />
        {label}
        {notificationCount !== undefined && (
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white shadow-sm">
            {notificationCount}
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="px-4 mt-1 gap-1 text-palette-secondary hover:text-blue-600  rounded-xl transition-all duration-200 ease-in-out flex flex-col items-center justify-center relative group border-b-2 border-transparent"
      activeClassName=" text-blue-600 font-semibold  "
    >
      <div className="relative">
        <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
        {notificationCount !== undefined && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white shadow-sm">
            {notificationCount}
          </span>
        )}
      </div>
      <span className="text-xs text-center font-small">{label}</span>
    </Link>
  );
};
