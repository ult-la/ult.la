export interface Short {
  id: string;
  video: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  description: string;
  song: string;
  likes: number;
  comments: number;
  shares: number;
}

export const shorts: Short[] = [
  {
    id: '1',
    video: 'https://joy1.videvo.net/videvo_files/video/free/2019-09/small_watermarked/190828_27_SuperTrees_HD_17_preview.webm',
    user: {
      name: 'Sarah Johnson',
      username: '@sarahjdesign',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    description: 'Exploring the amazing Gardens by the Bay in Singapore! 🌿✨ #travel #singapore #nature',
    song: 'Original Sound - Sarah Johnson',
    likes: 24567,
    comments: 342,
    shares: 89
  },
  {
    id: '2',
    video: 'https://joy1.videvo.net/videvo_files/video/free/2021-04/small_watermarked/210329_06B_Bali_1080p_013_preview.webm',
    user: {
      name: 'Mike Chen',
      username: '@miketheexplorer',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    description: 'Sunset vibes in Bali 🌅 Living my best life! #bali #travel #sunset',
    song: 'Paradise - Summer Beats',
    likes: 52981,
    comments: 892,
    shares: 245
  },
  {
    id: '3',
    video: 'https://joy1.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm',
    user: {
      name: 'Emma Wilson',
      username: '@emmadances',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    description: 'New dance routine! 💃 What do you think? #dance #choreography',
    song: 'Dancing Queen - ABBA',
    likes: 89123,
    comments: 1203,
    shares: 567
  }
]; 