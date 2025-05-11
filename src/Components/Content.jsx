import React from "react";

const Content = () => {
  const categories = [
    { name: "Digital Marketing", count: 37, color: "bg-teal-500" },
    { name: "Content Writing", count: 55, color: "bg-orange-500" },
    { name: "HR Management", count: 91, color: "bg-blue-500" },
    { name: "Development", count: 174, color: "bg-yellow-500" },
    { name: "Design", count: 95, color: "bg-purple-500" },
    { name: "Account & Finance", count: 67, color: "bg-amber-700" },
    { name: "Sales", count: 87, color: "bg-lime-500" },
    { name: "Project Management", count: 54, color: "bg-pink-500" },
  ];
  return (
    <div className="h-screen bg-white relative overflow-hidden">
      <div className=" container flex justify-start gap-90">
        <div className=" sm:text-3xl md:text-4xl  text-zinc-800 pt-20 px-35 mb-0 bg-clip-text">
          Explore Jobs by <br />
          Category.
        </div>
        <div className="pt-20  text-gray-600">
          Get the most exciting jobs from all around the world <br />
          and grow your career fast with others.
        </div>
      </div>
      <div className="bg-white pt-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-4 h-4 rounded-full ${category.color} mr-3`}
                  ></div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {category.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">{category.count} Jobs</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
