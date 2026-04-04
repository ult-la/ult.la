"use client";

import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  Settings,
  MessageCircle,
  Bell,
  MoreHorizontal,
  Calendar,
  Image,
} from "lucide-react";
import { groups } from "@/data/groups";

const Groups = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"discover" | "my-groups">(
    "discover"
  );

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "tech", name: "Technology" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" },
    { id: "health", name: "Health & Fitness" },
    { id: "art", name: "Art & Culture" },
  ];

  const filteredGroups =
    selectedCategory === "all"
      ? groups
      : groups.filter((group) => group.category === selectedCategory);

  const myGroups = groups.filter((group) => group.joined);

  const displayedGroups = viewMode === "discover" ? filteredGroups : myGroups;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-palette-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-palette-bg-tertiary rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-palette-accent" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-palette-primary">Groups</h1>
                <p className="text-sm text-palette-tertiary">
                  Connect with people who share your interests
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-palette-tertiary" />
                <input
                  type="text"
                  placeholder="Search groups..."
                  className="pl-9 pr-4 py-2 border border-palette-border rounded-lg text-sm w-full"
                />
              </div>

              <button className="px-4 py-2 bg-palette-btn-bg text-palette-btn-text rounded-lg hover:bg-palette-btn-bg-hover transition-colors flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Group
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="mt-6 flex gap-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "discover"
                  ? "bg-palette-btn-bg text-palette-btn-text"
                  : "bg-palette-bg text-palette-primary hover:bg-palette-hover"
              }`}
              onClick={() => setViewMode("discover")}
            >
              Discover
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "my-groups"
                  ? "bg-palette-btn-bg text-palette-btn-text"
                  : "bg-palette-bg text-palette-primary hover:bg-palette-hover"
              }`}
              onClick={() => setViewMode("my-groups")}
            >
              My Groups
            </button>
          </div>

          {viewMode === "discover" && (
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-palette-btn-bg text-palette-btn-text"
                      : "bg-palette-bg text-palette-primary hover:bg-palette-hover"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Groups Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group) => (
            <div
              key={group.id}
              className="bg-palette-card rounded-xl border border-palette-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-palette-card bg-opacity-90 rounded-full text-xs font-medium">
                  {group.privacy}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-palette-primary">
                      {group.name}
                    </h3>
                    <p className="text-sm text-palette-tertiary">
                      {group.members.toLocaleString()} members
                    </p>
                  </div>
                  {group.joined ? (
                    <button className="p-2 text-palette-tertiary hover:bg-palette-bg rounded-lg transition-colors">
                      <Settings className="h-5 w-5" />
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-palette-btn-bg text-palette-btn-text rounded-lg hover:bg-palette-btn-bg-hover transition-colors text-sm font-medium">
                      Join
                    </button>
                  )}
                </div>

                <p className="mt-2 text-sm text-palette-secondary line-clamp-2">
                  {group.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-palette-tertiary">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        group.activity === "Very Active"
                          ? "bg-green-500"
                          : group.activity === "Active"
                          ? "bg-yellow-500"
                          : "bg-palette-hover0"
                      }`}
                    ></span>
                    {group.activity}
                  </div>
                  <span>{group.lastActive}</span>
                </div>

                {group.joined && (
                  <div className="mt-4 pt-4 border-t border-palette-border">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <button className="p-2 text-palette-tertiary hover:bg-palette-bg rounded-lg transition-colors">
                          <MessageCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-palette-tertiary hover:bg-palette-bg rounded-lg transition-colors">
                          <Bell className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-palette-tertiary hover:bg-palette-bg rounded-lg transition-colors">
                          <Calendar className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-palette-tertiary hover:bg-palette-bg rounded-lg transition-colors">
                          <Image className="h-5 w-5" />
                        </button>
                      </div>
                      <button className="p-2 text-palette-tertiary hover:bg-palette-bg rounded-lg transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
