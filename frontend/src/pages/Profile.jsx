import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
        
        {/* Avatar & Basic Info */}
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-4 border-slate-800 shadow-lg"></div>
          <div>
            <h1 className="text-3xl font-bold text-slate-100">Algo Hacker</h1>
            <p className="text-slate-400">Full Stack Developer | Java & React Enthusiast</p>
          </div>
        </div>
        
        {/* Bio Section */}
        <div className="mt-8 border-t border-slate-800 pt-8">
          <h2 className="text-xl font-semibold text-slate-200 mb-4">Bio</h2>
          <p className="text-slate-400 leading-relaxed">
            Passionate software engineer building interactive platforms. Currently on a 30-day journey to master algorithms and system design.
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="mt-8 border-t border-slate-800 pt-8">
          <h2 className="text-xl font-semibold text-slate-200 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'JWT Auth'].map((skill, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/50 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;