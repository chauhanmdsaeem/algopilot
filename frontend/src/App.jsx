import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-grow w-full">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;