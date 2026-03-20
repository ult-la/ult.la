import { PostData } from '../types';

export const samplePosts: PostData[] = [
  {
    id: '1',
    user: {
      id: 'user1',
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    content: 'Just finished my latest design project! So excited to shaere it with everyone. What do you think? 🎨 #design #creativity',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes: 24,
    comments: [
      {
        id: 'comment1',
        user: {
          id: 'user5',
          name: 'Sarah Williams',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        content: 'This looks amazing! Love the color palette.',
        timestamp: '2025-02-15T14:35:00Z'
      },
      {
        id: 'comment2',
        user: {
          id: 'user8',
          name: 'David Chen',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        content: 'Incredible work as always!',
        timestamp: '2025-02-15T15:12:00Z'
      }
    ],
    timestamp: '2025-02-15T13:24:00Z'
  },
  {
    id: '2',
    user: {
      id: 'user2',
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    content: 'Beautiful day for a hike! 🌲 Nature is truly the best therapy. #outdoors #hiking #nature',
    image: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes: 37,
    comments: [
      {
        id: 'comment3',
        user: {
          id: 'user3',
          name: 'Michael Smith',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        content: 'Where is this? Looks gorgeous!',
        timestamp: '2025-02-14T18:43:00Z'
      }
    ],
    timestamp: '2025-02-14T17:30:00Z'
  },
  {
    id: '3',
    user: {
      id: 'user3',
      name: 'Michael Smith',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    content: 'Just read this amazing book! Highly recommend if you\'re into sci-fi and philosophy. What are you reading these days?',
    image: null,
    likes: 12,
    comments: [],
    timestamp: '2025-02-14T12:15:00Z'
  },
  {
    id: '4',
    user: {
      id: 'user4',
      name: 'Jessica Taylor',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    content: 'Just celebrated 5 years at my company! 🎉 Grateful for all the amazing colleagues and opportunities. Heres to many more years of growth and success!',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes: 89,
    comments: [
      {
        id: 'comment4',
        user: {
          id: 'user7',
          name: 'Robert Miller',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        content: 'Congratulations! Such an accomplishment! 🎉',
        timestamp: '2025-02-13T16:05:00Z'
      },
      {
        id: 'comment5',
        user: {
          id: 'user2',
          name: 'Emily Rodriguez',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        content: 'So proud of you! You deserve it!',
        timestamp: '2025-02-13T16:12:00Z'
      },
      {
        id: 'comment6',
        user: {
          id: 'user1',
          name: 'Alex Johnson',
          avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        content: 'Cant wait to celebrate!',
        timestamp: '2025-02-13T16:30:00Z'
      }
    ],
    timestamp: '2025-02-13T15:47:00Z'
  }
];