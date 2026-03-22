import React, { useState } from 'react';
import {
  Menu,
  X
} from 'lucide-react';
import { Link } from '../ui/Link';
import { Logo } from '../ui/Logo';
import { SearchInput } from '../navigation/SearchInput';
import { ProfileMenu } from '../navigation/ProfileMenu';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-palette-card shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-palette-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 text-palette-primary hover:opacity-80 transition">
              <Logo />
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <div className="relative group">
              <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-palette-hover transition">
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
              className="md:hidden p-2 text-palette-secondary hover:text-palette-accent hover:bg-palette-hover rounded-lg transition"
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
        <div className="md:hidden border-t border-palette-border">
          <div className="px-4 py-3">
            <SearchInput isMobile />
          </div>

          <ProfileMenu isMobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;