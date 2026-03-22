"use client";

import React, { useState } from "react";
import CreatePost from "@/components/feed/CreatePost";
import FeedList from "@/components/feed/FeedList";
import { PostData } from "@/types";
import { samplePosts } from "@/data/samplePosts";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>(samplePosts);

  const handleCreatePost = (newPost: PostData) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 w-full">
      <CreatePost onCreatePost={handleCreatePost} />
      <FeedList posts={posts} />
    </div>
  );
};

export default Home;
