import React from 'react';

const Sidebar = ({ selectedTech = [], handleRemoveTech, handleClearAll }) => {
  const count = selectedTech?.length || 0;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs sticky top-20">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
          <p className="text-xs text-slate-400">
            {count} {count === 1 ? 'technology' : 'technologies'} selected
          </p>
        </div>
      </div>

      {/* Selected Items List */}
      <div className="my-4 space-y-3 max-h-[350px] overflow-y-auto">
        {count === 0 ? (
          <p className="text-xs text-slate-400 text-center py-6">
            No technologies added yet.
          </p>
        ) : (
          selectedTech.map((tech) => (
            <div
              key={tech.id || tech.name}
              className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {tech.name}
                </span>
              </div>
              <button
                onClick={() => handleRemoveTech && handleRemoveTech(tech.id || tech.name)}
                className="text-slate-400 hover:text-red-500 font-bold text-sm px-1 transition-colors"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* Clear All Button */}
      {count > 0 && (
        <button
          onClick={handleClearAll}
          className="w-full py-2 text-xs font-semibold text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default Sidebar;