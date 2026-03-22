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
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-palette-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold text-palette-primary">
              Marketplace
            </h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-palette-tertiary" />
                <input
                  type="text"
                  placeholder="Search items..."
                  className="pl-9 pr-4 py-2 border border-palette-border rounded-lg text-sm w-full"
                />
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-2 bg-palette-bg text-palette-primary rounded-lg hover:bg-palette-hover transition-colors flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                <div className="flex border border-palette-border rounded-lg">
                  <button
                    className={`p-2 ${
                      viewMode === "grid" ? "bg-palette-bg" : "hover:bg-palette-hover"
                    } rounded-l-lg transition-colors`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-5 w-5 text-palette-tertiary" />
                  </button>
                  <button
                    className={`p-2 ${
                      viewMode === "list" ? "bg-palette-bg" : "hover:bg-palette-hover"
                    } rounded-r-lg transition-colors`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-5 w-5 text-palette-tertiary" />
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
