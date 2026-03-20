"use client";

import React, { useState } from "react";
import {
  Bell,
  Heart,
  Users,
  MessageCircle,
  Star,
  Calendar,
  Settings,
} from "lucide-react";
import { notifications } from "@/data/notifications";

const Notifications = () => {
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const filteredNotifications =
    filter === "all" ? notifications : notifications.filter((n) => !n.read);

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />;
      case "friend_request":
        return <Users className="h-4 w-4 text-blue-500" />;
      case "comment":
        return <MessageCircle className="h-4 w-4 text-green-500" />;
      case "event":
        return <Calendar className="h-4 w-4 text-purple-500" />;
      case "mention":
        return <Star className="h-4 w-4 text-yellow-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Bell className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Notifications
                </h1>
                <p className="text-sm text-gray-500">
                  {notifications.filter((n) => !n.read).length} unread
                  notifications
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value as "all" | "unread")}
              >
                <option value="all">All</option>
                <option value="unread">Unread</option>
              </select>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                !notification.read ? "bg-blue-50 hover:bg-blue-100" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {notification.user.name}
                        </span>
                        <span className="text-gray-500">
                          {notification.content}
                        </span>
                      </div>
                      {notification.target && (
                        <p className="mt-1 text-sm text-gray-600 line-clamp-1">
                          "{notification.target}"
                        </p>
                      )}
                      {notification.comment && (
                        <p className="mt-1 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                          {notification.comment}
                        </p>
                      )}
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        {getIcon(notification.type)}
                        <span>{formatTime(notification.timestamp)}</span>
                      </div>
                    </div>
                    {!notification.read && (
                      <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    )}
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

export default Notifications;
