"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-palette-bg">
      <Navbar />

      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="py-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
