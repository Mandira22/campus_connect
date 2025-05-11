import React from "react";
{
  /*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';*/
}

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      location: "New York, USA",
      title: "Full-Stack Web Developer",
      company: "Chorocon Ltd.",
      posted: "1 Week ago",
    },
    {
      location: "Singapore",
      title: "Senior Project Manager",
      company: "Google Inc.",
      posted: "2 Weeks ago",
    },
    {
      location: "Remote",
      title: "Junior Graphic Designer",
      company: "Canva",
      posted: "2 Weeks ago",
    },
    {
      location: "New York, USA",
      title: "Full-Stack Web Developer",
      company: "Chorocon Ltd.",
      posted: "1 Week ago",
    },
    {
      location: "Singapore",
      title: "Senior Project Manager",
      company: "Google Inc.",
      posted: "2 Weeks ago",
    },
    {
      location: "Remote",
      title: "Junior Graphic Designer",
      company: "Canva",
      posted: "2 Weeks ago",
    },
  ];

  return (
    <div className="bg-gray-50 h-screen py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Featured Jobs
            </h2>
            <p className="text-sm text-gray-500">
              Check our featured jobs from popular companies. Start applying
              now.
            </p>
          </div>
          <button className="bg-white text-indigo-500 font-semibold py-2 px-4 rounded-md border border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            View All Jobs
          </button>
        </div>
        <div className=" pt-15 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-gray-600 text-sm mb-2">
                {/*<FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />*/}
                {job.location}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-indigo-500 mb-4">By {job.company}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600 text-sm">
                  {job.posted}
                </div>
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
