import React from "react";
import {
  Users,
  Plus,
  X,
  Gift,
  Calendar,
  Star,
  Bookmark,
  TrendingUp,
  Globe,
  Bell,
} from "lucide-react";

const RightSidebar = () => {
  const friendRequests = [
    {
      id: "1",
      name: "Sarah Johnson",
      mutualFriends: 5,
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: "2",
      name: "Michael Chen",
      mutualFriends: 2,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const suggestions = [
    {
      id: "3",
      name: "Emma Wilson",
      mutualFriends: 8,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: "4",
      name: "James Rodriguez",
      mutualFriends: 3,
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: "5",
      name: "Olivia Taylor",
      mutualFriends: 1,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const events = [
    {
      id: "1",
      title: "Tech Meetup 2025",
      date: "2025-03-15",
      attendees: 156,
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: "2",
      title: "Design Workshop",
      date: "2025-03-20",
      attendees: 89,
      image:
        "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const trendingTopics = [
    { id: "1", topic: "#TechNews", posts: 12543 },
    { id: "2", topic: "#DigitalArt", posts: 8976 },
    { id: "3", topic: "#Innovation", posts: 6532 },
    { id: "4", topic: "#Startup", posts: 4321 },
  ];

  const savedItems = [
    {
      id: "1",
      title: "How to Master React in 2025",
      author: "Tech Blog",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: "2",
      title: "The Future of AI Development",
      author: "Tech Insights",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <div className="w-full lg:w-80 px-4 py-4">
      {/* Friend Requests */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden mb-4">
        <div className="p-4 border-b border-palette-border-light">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Friend Requests</h3>
            <a
              href="#"
              className="text-blue-600 text-xs font-medium hover:underline"
            >
              See All
            </a>
          </div>
        </div>

        <div className="p-2">
          {friendRequests.map((request) => (
            <div
              key={request.id}
              className="p-2 hover:bg-palette-hover rounded-lg transition-colors"
            >
              <div className="flex items-start">
                <img
                  src={request.avatar}
                  alt={request.name}
                  className="h-12 w-12 rounded-full object-cover border border-palette-border"
                />
                <div className="ml-3 flex-1">
                  <div className="text-sm font-semibold text-palette-primary">
                    {request.name}
                  </div>
                  <div className="text-xs text-palette-secondary flex items-center mt-0.5">
                    <Users className="h-3 w-3 mr-1" />
                    {request.mutualFriends} mutual friends
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 transition-colors">
                      Accept
                    </button>
                    <button className="px-3 py-1 bg-palette-hover text-palette-primary text-xs font-medium rounded-md hover:bg-palette-border transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* People You May Know */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden mb-4">
        <div className="p-4 border-b border-palette-border-light">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">People You May Know</h3>
            <a
              href="#"
              className="text-blue-600 text-xs font-medium hover:underline"
            >
              See All
            </a>
          </div>
        </div>
        <div className="p-2">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-2 hover:bg-palette-hover rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <img
                  src={suggestion.avatar}
                  alt={suggestion.name}
                  className="h-10 w-10 rounded-full object-cover border border-palette-border"
                />
                <div className="ml-3 flex-1">
                  <div className="text-sm font-semibold text-palette-primary">
                    {suggestion.name}
                  </div>
                  <div className="text-xs text-palette-secondary flex items-center mt-0.5">
                    <Users className="h-3 w-3 mr-1" />
                    {suggestion.mutualFriends} mutual friends
                  </div>
                </div>
                <button className="p-1.5 bg-palette-bg text-palette-primary rounded-full hover:bg-palette-hover transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Birthdays */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden mb-4">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Gift className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Birthdays</h3>
              <p className="text-sm text-palette-secondary mt-1">
                <span className="font-medium">David Kim</span> and{" "}
                <span className="font-medium">2 others</span> have birthdays
                today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden mb-4">
        <div className="p-4 border-b border-palette-border-light">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Upcoming Events</h3>
            <a
              href="#"
              className="text-blue-600 text-xs font-medium hover:underline"
            >
              View All
            </a>
          </div>
        </div>
        <div className="p-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-2 hover:bg-palette-hover rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium text-palette-primary">
                    {event.title}
                  </h4>
                  <p className="text-xs text-palette-secondary mt-0.5">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-palette-secondary mt-0.5">
                    <Users className="h-3 w-3 inline mr-1" />
                    {event.attendees} attending
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden mb-4">
        <div className="p-4 border-b border-palette-border-light">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <h3 className="text-sm font-semibold">Trending Topics</h3>
          </div>
        </div>
        <div className="p-2">
          {trendingTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-2 hover:bg-palette-hover rounded-lg transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  {topic.topic}
                </span>
                <span className="text-xs text-palette-secondary">
                  {topic.posts.toLocaleString()} posts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Items */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden mb-4">
        <div className="p-4 border-b border-palette-border-light">
          <div className="flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-blue-600" />
            <h3 className="text-sm font-semibold">Saved Items</h3>
          </div>
        </div>
        <div className="p-2">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="p-2 hover:bg-palette-hover rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium text-palette-primary">
                    {item.title}
                  </h4>
                  <p className="text-xs text-palette-secondary mt-0.5">
                    By {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Now */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border overflow-hidden">
        <div className="p-4 border-b border-palette-border-light">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Active Now</h3>
            <div className="flex space-x-2">
              <button className="text-palette-secondary hover:bg-palette-hover p-1 rounded-full">
                <Users className="h-4 w-4" />
              </button>
              <button className="text-palette-secondary hover:bg-palette-hover p-1 rounded-full">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-2">
          {["Alex Morgan", "Jessica Lee", "Ryan Thompson"].map((name, i) => (
            <div
              key={i}
              className="flex items-center py-1 px-2 rounded-lg hover:bg-palette-hover cursor-pointer"
            >
              <div className="relative">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <span className="text-xs font-medium">
                    {name.split(" ")[0][0]}
                    {name.split(" ")[1][0]}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-palette-card"></div>
              </div>
              <span className="ml-3 text-sm font-medium text-palette-primary">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
