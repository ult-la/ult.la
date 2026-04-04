"use client";

import React from "react";

const SignUpForm: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-palette-primary mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2.5 bg-palette-bg border border-palette-border rounded-lg text-palette-primary placeholder:text-palette-tertiary focus:outline-none focus:ring-2 focus:ring-palette-accent focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-palette-primary mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 bg-palette-bg border border-palette-border rounded-lg text-palette-primary placeholder:text-palette-tertiary focus:outline-none focus:ring-2 focus:ring-palette-accent focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-palette-primary mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2.5 bg-palette-bg border border-palette-border rounded-lg text-palette-primary placeholder:text-palette-tertiary focus:outline-none focus:ring-2 focus:ring-palette-accent focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-palette-primary mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2.5 bg-palette-bg border border-palette-border rounded-lg text-palette-primary placeholder:text-palette-tertiary focus:outline-none focus:ring-2 focus:ring-palette-accent focus:border-transparent transition"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 bg-palette-btn-bg text-palette-btn-text font-medium rounded-lg hover:bg-palette-btn-bg-hover transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
