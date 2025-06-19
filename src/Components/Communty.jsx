import React, { useState, useEffect } from 'react';

// Mock data for demonstration purposes
const mockAnnouncements = [
  { id: 1, title: 'Upcoming Company: Tech Solutions Inc. - June 15', date: 'May 28, 2025', content: 'Tech Solutions Inc. will be conducting pre-placement talks and interviews for Software Engineer roles. Details on eligibility and registration are available in the Announcements section.' },
  { id: 2, title: 'Resume Building Workshop - June 5', date: 'May 25, 2025', content: 'Join our interactive workshop to refine your resume and stand out to recruiters. Limited seats available, register now!' },
  { id: 3, title: 'New Internship Opportunities Posted', date: 'May 20, 2025', content: 'Check out the latest internship openings in various domains. Apply before the deadlines!' },
];

const mockDiscussions = [
  { id: 1, title: 'Interview Experience: Data Analyst at Quantify Corp.', author: 'Aisha Khan (Batch 2024)', replies: 12, views: 150, lastActive: '2 hours ago' },
  { id: 2, title: 'Best resources for Competitive Programming?', author: 'Rahul Sharma (Batch 2025)', replies: 8, views: 98, lastActive: 'Yesterday' },
  { id: 3, title: 'Tips for a successful Group Discussion round', author: 'Priya Singh (Batch 2024)', replies: 25, views: 230, lastActive: 'May 27, 2025' },
  { id: 4, title: 'Alumni working at Google - Your insights needed!', author: 'Student Query', replies: 5, views: 70, lastActive: 'May 26, 2025' },
];

const mockAlumni = [
  { id: 1, name: 'Dr. Rohan Mehta', batch: '2010', role: 'Chief Scientist', company: 'Innovate Labs', imageUrl: 'https://placehold.co/100x100/A78BFA/ffffff?text=RM' },
  { id: 2, name: 'Ms. Smita Rao', batch: '2015', role: 'Product Manager', company: 'GlobalTech Solutions', imageUrl: 'https://placehold.co/100x100/FDBA74/ffffff?text=SR' },
  { id: 3, name: 'Mr. David Lee', batch: '2018', role: 'Software Engineer', company: 'Nexus Innovations', imageUrl: 'https://placehold.co/100x100/93C5FD/ffffff?text=DL' },
];

const mockResources = [
  { id: 1, title: 'Resume & Cover Letter Templates', url: '#' },
  { id: 2, title: 'Aptitude Test Practice Questions', url: '#' },
  { id: 3, title: 'Common Interview Questions Handbook', url: '#' },
  { id: 4, title: 'Industry-Specific Skill Roadmaps', url: '#' },
];

const CommunitySection = () => {
  // State to manage active navigation link (optional, for future expansion)
  const [activeNav, setActiveNav] = useState('discussions');

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="bg-white shadow-md rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold text-indigo-800 mb-2 sm:mb-0">
          <i className="fas fa-users mr-2"></i>Community Hub
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search community..."
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            <i className="fas fa-plus mr-2"></i>New Post
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar Navigation */}
        <nav className="lg:col-span-1 bg-white shadow-md rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Navigation</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                onClick={() => setActiveNav('discussions')}
                className={`flex items-center p-3 rounded-lg transition duration-200 ${
                  activeNav === 'discussions'
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <i className="fas fa-comments mr-3"></i>Discussions
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveNav('alumni')}
                className={`flex items-center p-3 rounded-lg transition duration-200 ${
                  activeNav === 'alumni'
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <i className="fas fa-user-graduate mr-3"></i>Alumni Network
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveNav('resources')}
                className={`flex items-center p-3 rounded-lg transition duration-200 ${
                  activeNav === 'resources'
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <i className="fas fa-book mr-3"></i>Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveNav('my-profile')}
                className={`flex items-center p-3 rounded-lg transition duration-200 ${
                  activeNav === 'my-profile'
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <i className="fas fa-user-circle mr-3"></i>My Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveNav('guidelines')}
                className={`flex items-center p-3 rounded-lg transition duration-200 ${
                  activeNav === 'guidelines'
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <i className="fas fa-info-circle mr-3"></i>Guidelines
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content Area (2/4 width on large screens) */}
        <main className="lg:col-span-2 space-y-6">
          {/* Announcements Section */}
          <section className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-bullhorn mr-2 text-red-500"></i>Announcements
            </h2>
            <div className="space-y-4">
              {mockAnnouncements.map((announcement) => (
                <div key={announcement.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-medium text-indigo-700 hover:text-indigo-900 cursor-pointer">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-gray-500">{announcement.date}</p>
                  <p className="text-gray-600 mt-1 text-sm">{announcement.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Discussions Section */}
          <section className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-comments mr-2 text-blue-500"></i>Recent Discussions
            </h2>
            <div className="space-y-4">
              {mockDiscussions.map((discussion) => (
                <div key={discussion.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-medium text-gray-800 hover:text-indigo-700 cursor-pointer">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Started by {discussion.author}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="mr-4">
                      <i className="fas fa-reply mr-1"></i>{discussion.replies} Replies
                    </span>
                    <span className="mr-4">
                      <i className="fas fa-eye mr-1"></i>{discussion.views} Views
                    </span>
                    <span>
                      <i className="fas fa-clock mr-1"></i>Last active: {discussion.lastActive}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar (1/4 width on large screens) */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Alumni Spotlight Section */}
          <section className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-star mr-2 text-yellow-500"></i>Alumni Spotlight
            </h2>
            <div className="space-y-4">
              {mockAlumni.map((alumnus) => (
                <div key={alumnus.id} className="flex items-center space-x-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <img
                    src={alumnus.imageUrl}
                    alt={alumnus.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-300"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{alumnus.name}</h3>
                    <p className="text-sm text-gray-600">{alumnus.role} at {alumnus.company}</p>
                    <p className="text-xs text-gray-500">Batch {alumnus.batch}</p>
                  </div>
                </div>
              ))}
              <button className="w-full bg-indigo-50 text-white py-2 rounded-lg text-indigo-700 hover:bg-indigo-100 transition duration-300">
                View All Alumni
              </button>
            </div>
          </section>

          {/* Resources Section */}
          <section className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-folder-open mr-2 text-green-500"></i>Useful Resources
            </h2>
            <ul className="space-y-3">
              {mockResources.map((resource) => (
                <li key={resource.id}>
                  <a
                    href={resource.url}
                    className="text-indigo-600 hover:underline flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-2 text-sm"></i>{resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CommunitySection;
