export const notifications = [
    {
      id: '1',
      type: 'like',
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      content: 'liked your post',
      target: 'Just finished my latest design project!',
      timestamp: '2025-02-15T14:35:00Z',
      read: false
    },
    {
      id: '2',
      type: 'friend_request',
      user: {
        name: 'Michael Chen',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      content: 'sent you a friend request',
      timestamp: '2025-02-15T13:22:00Z',
      read: false
    },
    {
      id: '3',
      type: 'comment',
      user: {
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      content: 'commented on your post',
      target: 'Beautiful day for a hike!',
      comment: 'Where is this? Looks gorgeous!',
      timestamp: '2025-02-15T12:15:00Z',
      read: true
    },
    {
      id: '4',
      type: 'event',
      user: {
        name: 'Tech Meetup Group',
        avatar: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      content: 'invited you to an event',
      target: 'Annual Design Conference 2025',
      timestamp: '2025-02-15T10:45:00Z',
      read: true
    },
    {
      id: '5',
      type: 'mention',
      user: {
        name: 'James Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      content: 'mentioned you in a comment',
      target: 'Hey @Alex, what do you think about this design?',
      timestamp: '2025-02-15T09:30:00Z',
      read: false
    }
  ];