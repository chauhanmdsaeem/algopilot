import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-wider text-indigo-400">
              Algo<span className="text-white">Pilot</span>
            </span>
          </div>

          {/* Navigation Links (Placeholders for now) */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">Problems</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">Leaderboard</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">Dashboard</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Login
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm shadow-indigo-900/50">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;