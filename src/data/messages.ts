export const conversations = [
  {
    id: '1',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true,
      lastSeen: 'now'
    },
    lastMessage: {
      content: 'That sounds great! Let me know when youre free',
      timestamp: '10:42 AM',
      unread: true
    }
  },
  {
    id: '2',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: false,
      lastSeen: '2h ago'
    },
    lastMessage: {
      content: 'Thanks for the help with the project!',
      timestamp: 'Yesterday',
      unread: false
    }
  },
  {
    id: '3',
    user: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true,
      lastSeen: 'now'
    },
    lastMessage: {
      content: 'Did you see the latest design updates?',
      timestamp: 'Yesterday',
      unread: false
    }
  }
];

export const messages = [
  {
    id: '1',
    sender: 'them',
    content: 'Hey! How are you?',
    timestamp: '10:30 AM'
  },
  {
    id: '2',
    sender: 'me',
    content: 'I doing great, thanks! Just finished working on the new project. How about you?',
    timestamp: '10:32 AM'
  },
  {
    id: '3',
    sender: 'them',
    content: 'Tha awesome! I love to hear more about it. Want to grab coffee this weekend?',
    timestamp: '10:35 AM'
  },
  {
    id: '4',
    sender: 'me',
    content: 'Definitely! I free on Saturday afternoon. How does 2 PM sound?',
    timestamp: '10:38 AM'
  },
  {
    id: '5',
    sender: 'them',
    content: 'That sounds great! Let me know when youre free',
    timestamp: '10:42 AM'
  }
]; 