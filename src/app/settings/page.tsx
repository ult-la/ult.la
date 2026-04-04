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
import DarkModeToggle from "@/components/ui/DarkModeToggle";

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
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Menu */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-4">
            <h2 className="text-lg font-semibold text-palette-primary px-2 mb-4">
              Settings
            </h2>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-palette-accent-soft text-palette-accent"
                      : "text-palette-primary hover:bg-palette-hover"
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
          <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
            {activeSection === "account" && (
              <div>
                <h2 className="text-xl font-semibold text-palette-primary mb-6">
                  Account Settings
                </h2>

                <div className="space-y-6">
                  {/* Profile Information */}
                  <div className="pb-6 border-b border-palette-border">
                    <h3 className="text-lg font-medium text-palette-primary mb-4">
                      Profile Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-palette-secondary mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-palette-bg border border-palette-border rounded-lg text-palette-primary focus:ring-2 focus:ring-palette-border focus:border-palette-border"
                          defaultValue="Alex Johnson"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-palette-secondary mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 bg-palette-bg border border-palette-border rounded-lg text-palette-primary focus:ring-2 focus:ring-palette-border focus:border-palette-border"
                          defaultValue="alex@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-palette-secondary mb-1">
                          Bio
                        </label>
                        <textarea
                          className="w-full px-4 py-2 bg-palette-bg border border-palette-border rounded-lg text-palette-primary focus:ring-2 focus:ring-palette-border focus:border-palette-border"
                          rows={3}
                          defaultValue="Product designer and creative director with over 8 years of experience in digital design."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pb-6 border-b border-palette-border">
                    <h3 className="text-lg font-medium text-palette-primary mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-palette-tertiary" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-palette-primary">
                            Email Notifications
                          </div>
                          <div className="text-sm text-palette-secondary">
                            Manage your email preferences
                          </div>
                        </div>
                        <button className="text-palette-accent text-sm font-medium hover:underline">
                          Edit
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <Smartphone className="h-5 w-5 text-palette-tertiary" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-palette-primary">
                            Phone Number
                          </div>
                          <div className="text-sm text-palette-secondary">
                            Add a phone number for notifications
                          </div>
                        </div>
                        <button className="text-palette-accent text-sm font-medium hover:underline">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Account Management */}
                  <div>
                    <h3 className="text-lg font-medium text-palette-primary mb-4">
                      Account Management
                    </h3>
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-between px-4 py-3 bg-palette-hover rounded-lg hover:bg-palette-bg-tertiary transition-colors">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-palette-tertiary" />
                          <div className="text-left">
                            <div className="text-sm font-medium text-palette-primary">
                              Password & Security
                            </div>
                            <div className="text-sm text-palette-secondary">
                              Manage your password and 2FA settings
                            </div>
                          </div>
                        </div>
                        <div className="text-palette-accent">→</div>
                      </button>
                      <button className="w-full flex items-center justify-between px-4 py-3 bg-red-50 dark:bg-red-950 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition-colors">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-red-400" />
                          <div className="text-left">
                            <div className="text-sm font-medium text-red-600 dark:text-red-400">
                              Delete Account
                            </div>
                            <div className="text-sm text-red-500 dark:text-red-400">
                              Permanently delete your account and data
                            </div>
                          </div>
                        </div>
                        <div className="text-red-600 dark:text-red-400">→</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "privacy" && (
              <div>
                <h2 className="text-xl font-semibold text-palette-primary mb-6">
                  Privacy & Security
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-palette-primary">Profile Visibility</div>
                      <div className="text-sm text-palette-secondary">
                        Choose who can see your profile
                      </div>
                    </div>
                    <select className="px-3 py-2 bg-palette-bg border border-palette-border rounded-lg text-palette-primary focus:ring-2 focus:ring-palette-border focus:border-palette-border">
                      <option>Everyone</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-palette-border">
                    <div>
                      <div className="font-medium text-palette-primary">Post Privacy</div>
                      <div className="text-sm text-palette-secondary">
                        Default privacy setting for new posts
                      </div>
                    </div>
                    <select className="px-3 py-2 bg-palette-bg border border-palette-border rounded-lg text-palette-primary focus:ring-2 focus:ring-palette-border focus:border-palette-border">
                      <option>Public</option>
                      <option>Friends</option>
                      <option>Only Me</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "appearance" && (
              <div>
                <h2 className="text-xl font-semibold text-palette-primary mb-6">
                  Appearance
                </h2>
                <div className="space-y-6">
                  <div className="py-3">
                    <DarkModeToggle />
                  </div>
                </div>
              </div>
            )}

            {activeSection === "notifications" && (
              <div>
                <h2 className="text-xl font-semibold text-palette-primary mb-6">
                  Notifications
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-palette-tertiary" />
                      <div>
                        <div className="font-medium text-palette-primary">Push Notifications</div>
                        <div className="text-sm text-palette-secondary">
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
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-palette-border dark:peer-focus:ring-palette-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-palette-btn-bg"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-palette-border">
                    <div className="flex items-center gap-3">
                      <Volume2 className="h-5 w-5 text-palette-tertiary" />
                      <div>
                        <div className="font-medium text-palette-primary">Sound Effects</div>
                        <div className="text-sm text-palette-secondary">
                          Play sounds for notifications
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-palette-border dark:peer-focus:ring-palette-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-palette-btn-bg"></div>
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
