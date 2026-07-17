import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-xl font-bold tracking-wider text-indigo-400"
          >
            Algo<span className="text-white">Pilot</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <Link
              to="/problems"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              Problems
            </Link>

            <Link
              to="/leaderboard"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              Leaderboard
            </Link>

            <Link
              to="/dashboard"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Authentication */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-rose-900/50 transition-all duration-200 hover:bg-rose-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-900/50 transition-all duration-200 hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;