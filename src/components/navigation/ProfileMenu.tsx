"use client";

import React from "react";
import { User, Bookmark, Settings, LogOut, LogIn, HelpCircle, Home, Users, MessageCircle, Bell, Calendar, Clock, Heart, Star, FileText, ShoppingBag } from "lucide-react";
import { Link } from "../ui/Link";
import { useModal } from "@/contexts/ModalContext";

interface ProfileMenuProps {
  isMobile?: boolean;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  isMobile = false,
}) => {
  const { openModal } = useModal();
  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Users, label: "Friends" },
    { href: "/messages", icon: MessageCircle, label: "Messages" },
    { href: "/notifications", icon: Bell, label: "Notifications" },
  ];

  const sidebarItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/friend-requests", icon: Users, label: "Friends" },
    { href: "/saved", icon: Bookmark, label: "Saved" },
    { href: "/events", icon: Calendar, label: "Events" },
    { href: "/saved", icon: Clock, label: "Memories" },
    { href: "/dating", icon: Heart, label: "Dating" },
    { href: "/favorites", icon: Star, label: "Favorites" },
    { href: "/search", icon: FileText, label: "Pages" },
    { href: "/marketplace", icon: ShoppingBag, label: "Marketplace" },
  ];

  const menuItems = [
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/privacy", icon: HelpCircle, label: "Help Center" },
  ];

  const renderMenuItem = (item: (typeof menuItems)[0], isMobile: boolean) => (
    <Link
      key={item.href}
      href={item.href}
      className="flex items-center px-4 py-2.5 text-sm text-palette-primary hover:text-palette-accent hover:bg-palette-hover transition-colors duration-150"
    >
      <item.icon className={`${isMobile ? "h-5 w-5" : "h-4 w-4"} mr-3`} />
      {item.label}
    </Link>
  );

  const renderAuthButtons = (isMobile: boolean) => (
    <>
      <button
        onClick={() => openModal("signin")}
        className="w-full flex items-center px-4 py-2.5 text-sm text-palette-primary hover:text-palette-accent hover:bg-palette-hover transition-colors duration-150"
      >
        <LogIn className={`${isMobile ? "h-5 w-5" : "h-4 w-4"} mr-3`} />
        Sign In
      </button>
      <button
        onClick={() => openModal("signup")}
        className="w-full flex items-center px-4 py-2.5 text-sm text-palette-primary hover:text-palette-accent hover:bg-palette-hover transition-colors duration-150"
      >
        <User className={`${isMobile ? "h-5 w-5" : "h-4 w-4"} mr-3`} />
        Sign Up
      </button>
    </>
  );

  if (isMobile) {
    return (
      <div className="border-t border-palette-border pt-4 pb-3">
        <div className="px-4 flex items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-palette-border"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-palette-card"></div>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-palette-primary">John Doe</div>
            <div className="text-sm font-medium text-palette-secondary">
              john@example.com
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          {navItems.map((item) => renderMenuItem(item, true))}
          <div className="h-px bg-palette-border my-2"></div>
          {sidebarItems.map((item) => renderMenuItem(item, true))}
          <div className="h-px bg-palette-border my-2"></div>
          {menuItems.map((item) => renderMenuItem(item, true))}
          <div className="h-px bg-palette-border my-2"></div>
          {renderAuthButtons(true)}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-56 max-h-[80vh] overflow-y-auto bg-palette-card rounded-xl shadow-lg border border-palette-border py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="px-4 py-2 border-b border-palette-border-light">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-palette-border"
            />
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-palette-card"></div>
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-palette-primary">John Doe</div>
            <div className="text-xs font-medium text-palette-secondary">
              john@example.com
            </div>
          </div>
        </div>
      </div>
      <div className="py-1">
        {navItems.map((item) => renderMenuItem(item, false))}
        <div className="h-px bg-palette-border-light my-1"></div>
        {sidebarItems.map((item) => renderMenuItem(item, false))}
        <div className="h-px bg-palette-border-light my-1"></div>
        {menuItems.map((item) => renderMenuItem(item, false))}
        <div className="h-px bg-palette-border-light my-1"></div>
        {renderAuthButtons(false)}
      </div>
    </div>
  );
};
