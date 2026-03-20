export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

export interface PostData {
  id: string;
  user: User;
  content: string;
  image: string | null;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface BaseFavorite {
  id: string;
  title: string;
  content: string;
  image: string;
  savedAt: string;
}

export interface PostFavorite extends BaseFavorite {
  type: "post";
  author: User;
  likes: number;
  comments: number;
}

export interface ArticleFavorite extends BaseFavorite {
  type: "article";
  author: User;
  readTime: string;
}

export interface EventFavorite extends BaseFavorite {
  type: "event";
  date: string;
}

export interface PhotoFavorite extends BaseFavorite {
  type: "photo";
  author: User;
  likes: number;
}

export type Favorite = PostFavorite | ArticleFavorite | EventFavorite | PhotoFavorite;