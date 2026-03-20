"use client";

import React, { useState } from "react";
import { FavoriteItem } from "@/components/FavoriteItem";
import { FavoritesHeader } from "@/components/FavoritesHeader";
import { categories, favorites } from "@/data/favorites";

const Favorites = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFavorites =
    selectedCategory === "all"
      ? favorites
      : favorites.filter((item) => item.type === selectedCategory.slice(0, -1));

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <FavoritesHeader
          totalItems={favorites.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        {/* Favorites Grid/List */}
        <div
          className={`p-6 ${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }`}
        >
          {filteredFavorites.map((item) => (
            <FavoriteItem key={item.id} item={item} viewMode={viewMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
