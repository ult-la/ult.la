import React, { useState } from "react";
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { PostData } from "../../types";
import { formatTimeAgo } from "../../utils/formatTimeAgo";

interface PostProps {
  post: PostData;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: String(comments.length + 1),
          user: {
            id: "current-user",
            name: "Current User",
            avatar:
              "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150",
          },
          content: newComment,
          timestamp: new Date().toISOString(),
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="h-10 w-10 rounded-full object-cover border border-gray-200"
            />
            <div className="ml-3">
              <div className="text-sm font-semibold text-gray-900">
                {post.user.name}
              </div>
              <div className="text-xs text-gray-500">
                {formatTimeAgo(post.timestamp)}
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3">
          <p className="text-gray-800 text-sm">{post.content}</p>
        </div>

        {post.image && (
          <div className="mt-3 -mx-4">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        )}

        <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-500">
          <span>{likes} likes</span>
          <span>{comments.length} comments</span>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between">
          <button
            className={`flex items-center justify-center w-1/3 py-2 text-sm font-medium rounded-lg transition-colors ${
              liked
                ? "text-red-500 hover:bg-red-50"
                : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 mr-1 ${liked ? "fill-red-500" : ""}`} />
            Like
          </button>

          <button
            className="flex items-center justify-center w-1/3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-5 w-5 mr-1" />
            Comment
          </button>

          <button className="flex items-center justify-center w-1/3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 transition-colors">
            <Share className="h-5 w-5 mr-1" />
            Share
          </button>
        </div>

        {showComments && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            {comments.map((comment) => (
              <div key={comment.id} className="mb-3 flex items-start">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="h-8 w-8 rounded-full object-cover border border-gray-200 mr-2"
                />
                <div className="flex-1 bg-gray-100 rounded-2xl px-3 py-2">
                  <div className="text-xs font-semibold text-gray-900">
                    {comment.user.name}
                  </div>
                  <div className="text-sm text-gray-800">{comment.content}</div>
                </div>
              </div>
            ))}

            <form
              onSubmit={handleSubmitComment}
              className="mt-2 flex items-center"
            >
              <img
                src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Current User"
                className="h-8 w-8 rounded-full object-cover border border-gray-200 mr-2"
              />
              <input
                type="text"
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
