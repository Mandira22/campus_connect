import React from "react";

const testimonials = [
  {
    name: "Wade Warren",
    title: "UI Designer, Adobe",
    img: "working-man.jpg",
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    name: "Theresa Webb",
    title: "UI Designer, Adobe",
    img: "working-man.jpg",
    quote:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco.",
  },
  {
    name: "Floyd Miles",
    title: "UI Designer, Adobe",
    img: "working-man.jpg",
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    name: "Floyd Miles",
    title: "UI Designer, Adobe",
    img: "working-man.jpg",
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    name: "Floyd Miles",
    title: "UI Designer, Adobe",
    img: "working-man.jpg",
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
];

const TestimonialCardSection = () => {
  return (
    <section className="bg-red-50 h-screen content-center py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-30">
        What They Say About Our Services
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 w-80 shadow-md hover:shadow-lg transition"
          >
            <div className="h-40 pt-3">
            <p className="text-gray-600 mb-4">“{t.quote}”</p>
            </div>
            <div className="bg-gray-300 h-20 rounded-[1vw] px-5 py-4">
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      {/* Optional navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button className="bg-orange-500 text-white w-10 h-10 rounded-md text-lg hover:bg-orange-600">
          ‹
        </button>
        <button className="bg-white border border-gray-300 w-10 h-10 rounded-md text-lg hover:bg-gray-100">
          ›
        </button>
      </div>
    </section>
  );
};

export default TestimonialCardSection;
