"use client";

import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Info,
  Image,
  Smile,
  Send,
  Paperclip,
  Mic,
} from "lucide-react";
import { conversations, messages } from "@/data/messages";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string>("1");
  const [messageInput, setMessageInput] = useState("");

  const selectedConversation = conversations.find((c) => c.id === selectedChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // In a real app, this would send the message to the server
      setMessageInput("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[calc(100vh-8rem)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-full sm:w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                    selectedChat === conversation.id ? "bg-blue-50" : ""
                  }`}
                  onClick={() => setSelectedChat(conversation.id)}
                >
                  <div className="relative">
                    <img
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.user.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-gray-900 truncate">
                        {conversation.user.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.lastMessage.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {conversation.lastMessage.content}
                    </p>
                  </div>

                  {conversation.lastMessage.unread && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          {selectedConversation ? (
            <div className="hidden sm:flex flex-1 flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={selectedConversation.user.avatar}
                      alt={selectedConversation.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {selectedConversation.user.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-medium text-gray-900">
                      {selectedConversation.user.name}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {selectedConversation.user.online
                        ? "Online"
                        : `Last seen ${selectedConversation.user.lastSeen}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Video className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Info className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.sender === "me"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "me"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-end gap-2"
                >
                  <button
                    type="button"
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <div className="flex-1 relative">
                    <textarea
                      rows={1}
                      placeholder="Type a message..."
                      className="w-full px-4 py-2 bg-gray-100 rounded-2xl pr-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <div className="absolute right-2 bottom-2 flex items-center gap-1">
                      <button
                        type="button"
                        className="p-1 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Image className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        className="p-1 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Smile className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        className="p-1 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Mic className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`p-3 rounded-full transition-colors ${
                      messageInput.trim()
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!messageInput.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="hidden sm:flex flex-1 items-center justify-center">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Select a conversation
                </h3>
                <p className="text-gray-500">
                  Choose from your existing conversations
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
