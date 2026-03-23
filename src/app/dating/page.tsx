"use client";
import React, { useState } from "react";
import { profiles } from "@/data/profiles";
import { ProfileCard } from "@/components/dating/ProfileCard";
import { Filters } from "@/components/dating/Filters";
import { ActivityStats } from "@/components/dating/ActivityStats";

const Dating = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const currentProfile = profiles[currentProfileIndex];

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      // Handle match
      console.log("Liked profile:", currentProfile.name);
    }

    // Move to next profile
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <ProfileCard profile={currentProfile} onSwipe={handleSwipe} />
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80">
          <Filters />
          <div className="mt-6">
            <ActivityStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dating;
