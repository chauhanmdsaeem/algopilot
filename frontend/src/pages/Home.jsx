import React from 'react';

const Home = () => {
  // Dummy data for Popular Problems
  const popularProblems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: "49.2%" },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", acceptance: "40.3%" },
    { id: 3, title: "Longest Valid Parentheses", difficulty: "Hard", acceptance: "32.8%" },
    { id: 4, title: "Merge Intervals", difficulty: "Medium", acceptance: "46.1%" },
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="text-center pt-16 sm:pt-24">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-100">
          Master Algorithms with <span className="text-indigo-500">AlgoPilot</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 sm:text-xl">
          Your interactive platform for coding challenges. Practice, compete on the leaderboard, and prepare for your next technical interview.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all shadow-lg shadow-indigo-900/50">
            Start Coding
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3 rounded-lg text-base font-semibold transition-all border border-slate-700">
            Explore Problems
          </button>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-200">Why Choose AlgoPilot?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Interactive Editor", desc: "Write, test, and debug your code in a fully featured in-browser editor." },
            { title: "Global Leaderboard", desc: "Compete with peers and track your ranking as you solve more problems." },
            { title: "Curated Challenges", desc: "Hand-picked algorithmic problems ranging from easy to mind-bending." }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR PROBLEMS SECTION (Dummy Data) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-200">Popular Problems</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-800/50 text-slate-300 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Acceptance</th>
                <th className="px-6 py-4">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {popularProblems.map((problem) => (
                <tr key={problem.id} className="hover:bg-slate-800/25 transition-colors">
                  <td className="px-6 py-4 text-slate-500">⚪</td>
                  <td className="px-6 py-4 font-medium text-slate-200 hover:text-indigo-400 cursor-pointer transition-colors">
                    {problem.id}. {problem.title}
                  </td>
                  <td className="px-6 py-4">{problem.acceptance}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      problem.difficulty === 'Easy' ? 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50' :
                      problem.difficulty === 'Medium' ? 'bg-amber-900/30 text-amber-400 border-amber-800/50' :
                      'bg-rose-900/30 text-rose-400 border-rose-800/50'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-200">What Developers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <p className="text-slate-300 italic mb-6">"AlgoPilot completely changed how I prepare for interviews. The interface is blazing fast and the problem sets are incredibly relevant."</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
              <div>
                <p className="text-sm font-bold text-slate-200">Sarah Jenkins</p>
                <p className="text-xs text-slate-500">Software Engineer II</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <p className="text-slate-300 italic mb-6">"The leaderboard keeps me coming back every single day. It's the perfect mix of learning and competition."</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500"></div>
              <div>
                <p className="text-sm font-bold text-slate-200">David Chen</p>
                <p className="text-xs text-slate-500">Computer Science Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;