"use client";

import React, { useState } from "react";
import {
  Bell,
  Lock,
  Eye,
  Globe2,
  UserCog,
  Palette,
  Volume2,
  Mail,
  Smartphone,
  Shield,
} from "lucide-react";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("account");

  const menuItems = [
    { id: "account", label: "Account Settings", icon: UserCog },
    { id: "privacy", label: "Privacy & Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "accessibility", label: "Accessibility", icon: Eye },
    { id: "language", label: "Language & Region", icon: Globe2 },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Menu */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900 px-2 mb-4">
              Settings
            </h2>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {activeSection === "account" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Account Settings
                </h2>

                <div className="space-y-6">
                  {/* Profile Information */}
                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Profile Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue="Alex Johnson"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue="alex@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          rows={3}
                          defaultValue="Product designer and creative director with over 8 years of experience in digital design."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-700">
                            Email Notifications
                          </div>
                          <div className="text-sm text-gray-500">
                            Manage your email preferences
                          </div>
                        </div>
                        <button className="text-blue-600 text-sm font-medium hover:underline">
                          Edit
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <Smartphone className="h-5 w-5 text-gray-400" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-700">
                            Phone Number
                          </div>
                          <div className="text-sm text-gray-500">
                            Add a phone number for notifications
                          </div>
                        </div>
                        <button className="text-blue-600 text-sm font-medium hover:underline">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Account Management */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Account Management
                    </h3>
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-gray-400" />
                          <div className="text-left">
                            <div className="text-sm font-medium text-gray-700">
                              Password & Security
                            </div>
                            <div className="text-sm text-gray-500">
                              Manage your password and 2FA settings
                            </div>
                          </div>
                        </div>
                        <div className="text-blue-600">→</div>
                      </button>
                      <button className="w-full flex items-center justify-between px-4 py-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-red-400" />
                          <div className="text-left">
                            <div className="text-sm font-medium text-red-600">
                              Delete Account
                            </div>
                            <div className="text-sm text-red-500">
                              Permanently delete your account and data
                            </div>
                          </div>
                        </div>
                        <div className="text-red-600">→</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "privacy" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Privacy & Security
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium">Profile Visibility</div>
                      <div className="text-sm text-gray-500">
                        Choose who can see your profile
                      </div>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Everyone</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-200">
                    <div>
                      <div className="font-medium">Post Privacy</div>
                      <div className="text-sm text-gray-500">
                        Default privacy setting for new posts
                      </div>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Public</option>
                      <option>Friends</option>
                      <option>Only Me</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "notifications" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Notifications
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-sm text-gray-500">
                          Get notified about new activity
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <Volume2 className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">Sound Effects</div>
                        <div className="text-sm text-gray-500">
                          Play sounds for notifications
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
