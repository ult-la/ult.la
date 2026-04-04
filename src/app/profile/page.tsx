"use client";

import React, { useState } from "react";
import {
  Camera,
  MapPin,
  Link as LinkIcon,
  Calendar,
  Edit,
  Grid,
  BookOpen,
  Users,
} from "lucide-react";
import FeedList from "@/components/feed/FeedList";
import { samplePosts } from "@/data/samplePosts";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "about" | "friends">(
    "posts"
  );
  const userPosts = samplePosts.filter((post) => post.user.id === "user1");

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Cover Photo */}
      <div className="relative h-80 rounded-xl overflow-hidden mb-4">
        <img
          src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 bg-palette-card bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
          <Camera className="h-5 w-5 text-palette-primary" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="relative bg-palette-card rounded-xl shadow-sm border border-palette-border p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          {/* Profile Picture */}
          <div className="relative -mt-20 sm:-mt-24">
            <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-white overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-2 right-2 bg-palette-card p-1.5 rounded-full shadow-md hover:bg-palette-hover transition-colors">
              <Camera className="h-4 w-4 text-palette-primary" />
            </button>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-palette-primary">
                  Alex Johnson
                </h1>
                <p className="text-palette-tertiary text-sm">
                  Product Designer • Creative Director
                </p>
              </div>
              <button className="px-4 py-2 bg-palette-btn-bg text-palette-btn-text rounded-lg hover:bg-palette-btn-bg-hover transition-colors flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-palette-tertiary">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <a href="#" className="text-palette-accent hover:underline">
                  alexjohnson.design
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Joined March 2020
              </div>
            </div>

            <div className="mt-4 flex gap-6">
              <button className="text-sm hover:underline">
                <span className="font-semibold text-palette-primary">2,543</span>
                <span className="text-palette-tertiary ml-1">Following</span>
              </button>
              <button className="text-sm hover:underline">
                <span className="font-semibold text-palette-primary">10.8K</span>
                <span className="text-palette-tertiary ml-1">Followers</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border mb-6">
        <div className="flex">
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "posts"
                ? "border-palette-accent text-palette-accent"
                : "border-transparent text-palette-tertiary hover:text-palette-primary"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            <div className="flex items-center justify-center gap-2">
              <Grid className="h-5 w-5" />
              Posts
            </div>
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "about"
                ? "border-palette-accent text-palette-accent"
                : "border-transparent text-palette-tertiary hover:text-palette-primary"
            }`}
            onClick={() => setActiveTab("about")}
          >
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-5 w-5" />
              About
            </div>
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "friends"
                ? "border-palette-accent text-palette-accent"
                : "border-transparent text-palette-tertiary hover:text-palette-primary"
            }`}
            onClick={() => setActiveTab("friends")}
          >
            <div className="flex items-center justify-center gap-2">
              <Users className="h-5 w-5" />
              Friends
            </div>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "posts" && <FeedList posts={userPosts} />}

        {activeTab === "about" && (
          <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-palette-primary mb-2">
                  About
                </h3>
                <p className="text-palette-secondary">
                  Product designer and creative director with over 8 years of
                  experience in digital design. Passionate about creating
                  beautiful and functional user experiences that solve real
                  problems.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-palette-primary mb-2">
                  Work
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Creative Director</div>
                    <div className="text-sm text-palette-tertiary">
                      DesignCo • 2020 - Present
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Senior Product Designer</div>
                    <div className="text-sm text-palette-tertiary">
                      TechStart • 2017 - 2020
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-palette-primary mb-2">
                  Education
                </h3>
                <div>
                  <div className="font-medium">Bachelor of Design</div>
                  <div className="text-sm text-palette-tertiary">
                    Design University • 2013 - 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "friends" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-4"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={`https://images.pexels.com/photos/${
                      1680172 + i
                    }/pexels-photo-${
                      1680172 + i
                    }.jpeg?auto=compress&cs=tinysrgb&w=150`}
                    alt="Friend"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-palette-primary">Friend Name</div>
                    <div className="text-sm text-palette-tertiary">
                      Mutual Friends: {Math.floor(Math.random() * 20) + 1}
                    </div>
                    <button className="mt-2 w-full px-3 py-1.5 bg-palette-bg text-palette-primary text-sm font-medium rounded-lg hover:bg-palette-hover transition-colors">
                      Friends
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
