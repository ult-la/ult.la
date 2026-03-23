"use client";

import React from "react";
import { Users, Check, X } from "lucide-react";
import { friendRequests } from "@/data/friendRequests";

const FriendRequests = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        <div className="p-6 border-b border-palette-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-palette-primary">
                  Friend Requests
                </h1>
                <p className="text-sm text-palette-tertiary">
                  {friendRequests.length} pending requests
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-palette-border">
          {friendRequests.map((request) => (
            <div
              key={request.id}
              className="p-6 hover:bg-palette-hover transition-colors"
            >
              <div className="flex items-start gap-4">
                <img
                  src={request.avatar}
                  alt={request.name}
                  className="h-16 w-16 rounded-full object-cover border border-palette-border"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-palette-primary">
                        {request.name}
                      </h3>
                      <p className="text-sm text-palette-tertiary">
                        {request.occupation}
                      </p>
                      <p className="text-sm text-palette-tertiary">
                        {request.location}
                      </p>
                      <div className="mt-1 flex items-center text-sm text-palette-tertiary">
                        <Users className="h-4 w-4 mr-1" />
                        {request.mutualFriends} mutual friends
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Accept
                      </button>
                      <button className="px-4 py-2 bg-palette-bg text-palette-primary rounded-lg hover:bg-palette-hover transition-colors flex items-center gap-2">
                        <X className="h-4 w-4" />
                        Decline
                      </button>
                    </div>
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

export default FriendRequests;
