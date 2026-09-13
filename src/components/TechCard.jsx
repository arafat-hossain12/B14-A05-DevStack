import React from 'react';

const TechCard = ({ tech, handleSelectTech, isSelected }) => {
  // ব্যাজের কালার এরিয়া
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular':
        return 'bg-cyan-50 text-cyan-500';
      case 'versatile':
        return 'bg-emerald-50 text-emerald-500';
      case 'fast':
        return 'bg-amber-50 text-amber-500';
      case 'standard':
        return 'bg-emerald-50 text-emerald-500';
      case 'top sql':
        return 'bg-blue-50 text-blue-500';
      case 'cache':
        return 'bg-rose-50 text-rose-500';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-500';
      case 'essential':
        return 'bg-sky-50 text-sky-500';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <img src={tech.image} alt={tech.name} className="w-8 h-8 object-contain" />
          {tech.badge && (
            <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${getBadgeStyle(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2 min-h-[36px]">
          {tech.description}
        </p>

        {/* Meta Info Pills */}
        <div className="flex items-center gap-2 my-4 text-[11px]">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
            {tech.category}
          </span>
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
            {tech.level || 'Intermediate'}
          </span>
          <span className="ml-auto text-amber-500 font-semibold flex items-center gap-1">
            ★ {tech.rating || '4.8'}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => handleSelectTech(tech)}
        disabled={isSelected}
        className={`w-full py-2.5 rounded-xl font-medium text-xs transition-all ${
          isSelected
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
        }`}
      >
        {isSelected ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;