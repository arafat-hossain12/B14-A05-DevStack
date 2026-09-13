import React from 'react';

const Banner = () => {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Text */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#explore"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition-all"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/banner-stack.png"
            alt="Development Stack"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;