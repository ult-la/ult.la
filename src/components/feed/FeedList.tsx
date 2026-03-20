import React from "react";
import Post from "./Post";
import { PostData } from "../../types";

interface FeedListProps {
  posts: PostData[];
}

const FeedList: React.FC<FeedListProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedList;
