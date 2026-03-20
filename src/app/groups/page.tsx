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
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Groups</h1>
                <p className="text-sm text-gray-500">
                  Connect with people who share your interests
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search groups..."
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full"
                />
              </div>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
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
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setViewMode("discover")}
            >
              Discover
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "my-groups"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white bg-opacity-90 rounded-full text-xs font-medium">
                  {group.privacy}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {group.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {group.members.toLocaleString()} members
                    </p>
                  </div>
                  {group.joined ? (
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                      <Settings className="h-5 w-5" />
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Join
                    </button>
                  )}
                </div>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {group.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        group.activity === "Very Active"
                          ? "bg-green-500"
                          : group.activity === "Active"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    ></span>
                    {group.activity}
                  </div>
                  <span>{group.lastActive}</span>
                </div>

                {group.joined && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                          <MessageCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                          <Bell className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                          <Calendar className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                          <Image className="h-5 w-5" />
                        </button>
                      </div>
                      <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
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
