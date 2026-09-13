import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [techs, setTechs] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setTechs(data))
      .catch((err) => console.error('Data loading error:', err));
  }, []);

  const handleSelectTech = (tech) => {
    if (!selectedTech.some((item) => item.id === tech.id)) {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const handleRemoveTech = (id) => {
    setSelectedTech(selectedTech.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setSelectedTech([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <Banner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full" id="explore">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techs.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                handleSelectTech={handleSelectTech}
                isSelected={selectedTech.some((item) => item.id === tech.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <Sidebar
              selectedTech={selectedTech}
              handleRemoveTech={handleRemoveTech}
              handleClearAll={handleClearAll}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;