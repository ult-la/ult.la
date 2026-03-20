"use client";

import React from "react";
import { Users, UserPlus, MapPin, Briefcase } from "lucide-react";
import { searchResults } from "@/data/searchResults";

const SearchResults = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Search Results
              </h1>
              <p className="text-sm text-gray-500">
                {searchResults.length} people found
              </p>
            </div>
            <div className="flex gap-2">
              <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                <option>All Results</option>
                <option>People</option>
                <option>Posts</option>
                <option>Groups</option>
              </select>
              <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                <option>Sort by: Relevance</option>
                <option>Name</option>
                <option>Location</option>
                <option>Mutual Friends</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {searchResults.map((person) => (
            <div
              key={person.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="h-16 w-16 rounded-full object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {person.name}
                      </h3>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {person.occupation}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {person.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          {person.mutualFriends} mutual friends
                        </div>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                        person.isFriend
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-blue-600 text-white hover:bg-blue-700"
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
