"use client";

import React, { useState } from "react";
import { Grid, List, Filter, Bookmark } from "lucide-react";
import { FavoriteItem } from "@/components/FavoriteItem";
import { savedItems } from "@/data/favorites";

const Saved = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredItems =
    selectedType === "all"
      ? savedItems
      : savedItems.filter((item) => item.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-palette-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Bookmark className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-palette-primary">
                  Saved Items
                </h1>
                <p className="text-sm text-palette-tertiary">
                  {filteredItems.length} items saved
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex bg-palette-bg rounded-lg p-1">
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-palette-card shadow-sm"
                      : "text-palette-tertiary hover:text-palette-primary"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-palette-card shadow-sm"
                      : "text-palette-tertiary hover:text-palette-primary"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  className="pl-9 pr-4 py-2 bg-palette-card border border-palette-border rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Items</option>
                  <option value="post">Posts</option>
                  <option value="article">Articles</option>
                  <option value="event">Events</option>
                  <option value="photo">Photos</option>
                </select>
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-palette-tertiary" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredItems.map((item) => (
              <FavoriteItem key={item.id} item={item} viewMode={viewMode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
