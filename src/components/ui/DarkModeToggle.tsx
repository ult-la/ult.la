"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface DarkModeToggleProps {
  showLabel?: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  showLabel = true,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-between">
      {showLabel && (
        <div className="flex items-center gap-3">
          {isDark ? (
            <Moon className="h-5 w-5 text-palette-tertiary" />
          ) : (
            <Sun className="h-5 w-5 text-palette-tertiary" />
          )}
          <div>
            <div className="font-medium text-palette-primary">Dark Mode</div>
            <div className="text-sm text-palette-secondary">
              {isDark ? "Switch to light theme" : "Switch to dark theme"}
            </div>
          </div>
        </div>
      )}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-palette-border dark:peer-focus:ring-palette-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-palette-btn-bg"></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
