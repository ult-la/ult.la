"use client";

import React from "react";
import { Users, UserPlus, MapPin, Briefcase } from "lucide-react";
import { searchResults } from "@/data/searchResults";

const SearchResults = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        <div className="p-6 border-b border-palette-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-palette-primary">
                Search Results
              </h1>
              <p className="text-sm text-palette-tertiary">
                {searchResults.length} people found
              </p>
            </div>
            <div className="flex gap-2">
              <select className="px-3 py-2 bg-palette-card border border-palette-border rounded-lg text-sm">
                <option>All Results</option>
                <option>People</option>
                <option>Posts</option>
                <option>Groups</option>
              </select>
              <select className="px-3 py-2 bg-palette-card border border-palette-border rounded-lg text-sm">
                <option>Sort by: Relevance</option>
                <option>Name</option>
                <option>Location</option>
                <option>Mutual Friends</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-palette-border">
          {searchResults.map((person) => (
            <div
              key={person.id}
              className="p-6 hover:bg-palette-hover transition-colors"
            >
              <div className="flex items-start gap-4">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="h-16 w-16 rounded-full object-cover border border-palette-border"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-palette-primary">
                        {person.name}
                      </h3>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center text-sm text-palette-tertiary">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {person.occupation}
                        </div>
                        <div className="flex items-center text-sm text-palette-tertiary">
                          <MapPin className="h-4 w-4 mr-1" />
                          {person.location}
                        </div>
                        <div className="flex items-center text-sm text-palette-tertiary">
                          <Users className="h-4 w-4 mr-1" />
                          {person.mutualFriends} mutual friends
                        </div>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                        person.isFriend
                          ? "bg-palette-bg text-palette-primary hover:bg-palette-hover"
                          : "bg-palette-btn-bg text-palette-btn-text hover:bg-palette-btn-bg-hover"
                      }`}
                    >
                      {person.isFriend ? (
                        <>
                          <Users className="h-4 w-4" />
                          Friends
                        </>
                      ) : (
                        <>
                          <UserPlus className="h-4 w-4" />
                          Add Friend
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
