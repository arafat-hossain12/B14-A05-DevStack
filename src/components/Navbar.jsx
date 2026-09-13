import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Mobile 3-Lines Hamburger Icon (Only visible on Mobile) */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-slate-900 focus:outline-none p-1.5 rounded-lg hover:bg-slate-100 transition-all"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                // Close Icon (✕)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // 3-Lines Hamburger Icon (☰)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Center on Mobile / Left on Desktop: Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm">
            DS
          </div>
          <span className="text-xl font-bold text-slate-900">
            Dev <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="text-pink-500 font-semibold">Home</a>
          <a href="#explore" className="hover:text-slate-900 transition-colors">Technologies</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        {/* Right: Sign In and Sign Up Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 text-sm font-medium">
          <a href="#" className="text-slate-600 hover:text-slate-900 px-2 py-1 text-xs sm:text-sm">
            Sign In
          </a>
          <a 
            href="#" 
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold transition-all shadow-sm text-xs sm:text-sm hover:opacity-95"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Showed when clicking 3 lines) */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-2 text-sm font-medium text-slate-600">
          <a href="#" className="block py-1.5 text-pink-500 font-semibold">Home</a>
          <a href="#explore" className="block py-1.5 hover:text-slate-900">Technologies</a>
          <a href="#" className="block py-1.5 hover:text-slate-900">Projects</a>
          <a href="#" className="block py-1.5 hover:text-slate-900">About</a>
          <a href="#" className="block py-1.5 hover:text-slate-900">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;