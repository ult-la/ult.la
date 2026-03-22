import { Heart, MessageCircle, Calendar } from 'lucide-react';

export const ActivityStats = () => {
  return (
    <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
      <h3 className="text-lg font-semibold mb-4">Your Activity</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-palette-secondary">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Likes Given</span>
          </div>
          <span className="font-medium">28</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-palette-secondary">
            <MessageCircle className="h-5 w-5 text-blue-500" />
            <span>Active Chats</span>
          </div>
          <span className="font-medium">5</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-palette-secondary">
            <Calendar className="h-5 w-5 text-purple-500" />
            <span>Upcoming Dates</span>
          </div>
          <span className="font-medium">2</span>
        </div>
      </div>
    </div>
  );
}; 