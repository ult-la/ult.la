"use client";

import React, { useState } from "react";
import { Calendar, Filter, Search } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data/events";
import { FilterButton } from "@/components/ui/FilterButton";

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "saved">("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") {
      return new Date(event.date) > new Date();
    }
    if (filter === "saved") {
      return event.saved;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        <div className="p-6 border-b border-palette-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-palette-primary">Events</h1>
                <p className="text-sm text-palette-tertiary">
                  Discover upcoming events near you
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-palette-tertiary" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-9 pr-4 py-2 border border-palette-border rounded-lg text-sm w-full"
                />
              </div>

              <div className="flex gap-2">
                <select className="px-3 py-2 bg-palette-card border border-palette-border rounded-lg text-sm">
                  <option>All Categories</option>
                  <option>Design</option>
                  <option>Technology</option>
                  <option>Marketing</option>
                  <option>Photography</option>
                </select>

                <button className="p-2 text-palette-tertiary hover:text-palette-primary hover:bg-palette-bg rounded-lg transition-colors">
                  <Filter className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <FilterButton
              label="All Events"
              isActive={filter === "all"}
              onClick={() => setFilter("all")}
            />
            <FilterButton
              label="Upcoming"
              isActive={filter === "upcoming"}
              onClick={() => setFilter("upcoming")}
            />
            <FilterButton
              label="Saved"
              isActive={filter === "saved"}
              onClick={() => setFilter("saved")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
