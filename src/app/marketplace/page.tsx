"use client";
import React, { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { CategoryList } from "@/components/CategoryList";
import { MarketplaceItem } from "@/components/MarketplaceItem";
import { categories, items } from "@/data/marketplace";
import { ViewMode } from "@/types/marketplace";

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Marketplace
            </h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search items..."
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full"
                />
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                <div className="flex border border-gray-200 rounded-lg">
                  <button
                    className={`p-2 ${
                      viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
                    } rounded-l-lg transition-colors`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-5 w-5 text-gray-500" />
                  </button>
                  <button
                    className={`p-2 ${
                      viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"
                    } rounded-r-lg transition-colors`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Items Grid/List */}
        <div
          className={`p-6 ${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }`}
        >
          {filteredItems.map((item) => (
            <MarketplaceItem key={item.id} item={item} viewMode={viewMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
