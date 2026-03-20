"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const hideRightSidebar = [
    "/events",
    "/event",
    "/friends",
    "/favorites",
    "/marketplace",
    "/dating",
    "/settings",
    "/groups",
    "/messages",
    "/marketplace/item",
    "/saved"
  ].includes(pathname);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:flex-shrink-0">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 py-4">{children}</div>

          {/* Right Sidebar - Hidden on mobile and specific routes */}
          {!hideRightSidebar && (
            <div className="hidden lg:block lg:flex-shrink-0">
              <RightSidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
