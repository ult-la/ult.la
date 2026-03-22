import React, { useState } from "react";
import { Image, Smile, MapPin, User, X } from "lucide-react";

const CreatePost: React.FC<{ onCreatePost: (post: any) => void }> = ({
  onCreatePost,
}) => {
  const [content, setContent] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onCreatePost({
        id: Math.random().toString(),
        content,
        image: previewImage,
        user: {
          id: "current-user",
          name: "Current User",
          avatar:
            "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        likes: 0,
        comments: [],
        timestamp: new Date().toISOString(),
      });
      setContent("");
      setPreviewImage(null);
      setIsExpanded(false);
    }
  };

  const handleImageUpload = () => {
    // In a real app, this would be a file upload
    // For demo purposes, we'll just use a sample image
    setPreviewImage(
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800"
    );
    setIsExpanded(true);
  };

  const removeImage = () => {
    setPreviewImage(null);
  };

  return (
    <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-4 mb-4">
      <div className="flex items-center mb-3">
        <img
          src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150"
          alt="Current User"
          className="h-10 w-10 rounded-full object-cover border border-palette-border"
        />
        <input
          type="text"
          className="ml-3 flex-1 bg-palette-bg rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-palette-card"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            if (e.target.value.length > 0 && !isExpanded) {
              setIsExpanded(true);
            }
          }}
          onClick={() => !isExpanded && setIsExpanded(true)}
        />
      </div>

      {isExpanded && (
        <form onSubmit={handleSubmit}>
          {previewImage && (
            <div className="mt-3 relative">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto max-h-[300px] object-cover rounded-lg"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-100 transition-opacity"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mt-3 pt-3 border-t border-palette-border flex flex-wrap items-center justify-between">
            <div className="flex space-x-2 mb-2 sm:mb-0">
              <button
                type="button"
                className="flex items-center text-sm font-medium text-palette-secondary hover:text-blue-600 hover:bg-palette-hover rounded-lg px-3 py-1.5 transition-colors"
                onClick={handleImageUpload}
              >
                <Image className="h-5 w-5 mr-1.5" />
                <span className="hidden sm:inline">Photo</span>
              </button>
              <button
                type="button"
                className="flex items-center text-sm font-medium text-palette-secondary hover:text-blue-600 hover:bg-palette-hover rounded-lg px-3 py-1.5 transition-colors"
              >
                <User className="h-5 w-5 mr-1.5" />
                <span className="hidden sm:inline">Tag</span>
              </button>
              <button
                type="button"
                className="flex items-center text-sm font-medium text-palette-secondary hover:text-blue-600 hover:bg-palette-hover rounded-lg px-3 py-1.5 transition-colors"
              >
                <Smile className="h-5 w-5 mr-1.5" />
                <span className="hidden sm:inline">Feeling</span>
              </button>
              <button
                type="button"
                className="flex items-center text-sm font-medium text-palette-secondary hover:text-blue-600 hover:bg-palette-hover rounded-lg px-3 py-1.5 transition-colors"
              >
                <MapPin className="h-5 w-5 mr-1.5" />
                <span className="hidden sm:inline">Location</span>
              </button>
            </div>

            <button
              type="submit"
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                content.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-palette-hover text-palette-tertiary cursor-not-allowed"
              }`}
              disabled={!content.trim()}
            >
              Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreatePost;
