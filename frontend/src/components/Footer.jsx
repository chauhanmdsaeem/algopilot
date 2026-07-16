import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          
          {/* Footer Links */}
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="hover:text-slate-300 text-sm">About</a>
            <a href="#" className="hover:text-slate-300 text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 text-sm">Terms of Service</a>
          </div>

          {/* Copyright text */}
          <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} AlgoPilot. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;