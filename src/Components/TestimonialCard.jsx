import React, { useState } from "react";

const testimonials = [
  {
    id: 1, // Added ID for key prop
    name: "Wade Warren",
    title: "UI Designer, Adobe",
    img: "https://placehold.co/40x40/FF6347/FFFFFF?text=WW", // Placeholder image URL
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    id: 2,
    name: "Theresa Webb",
    title: "UI Designer, Adobe",
    img: "https://placehold.co/40x40/4682B4/FFFFFF?text=TW", // Placeholder image URL
    quote:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco.",
  },
  {
    id: 3,
    name: "Floyd Miles",
    title: "UI Designer, Adobe",
    img: "https://placehold.co/40x40/FFD700/000000?text=FM", // Placeholder image URL
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    id: 4,
    name: "Esther Howard",
    title: "Product Manager, Google",
    img: "https://placehold.co/40x40/9370DB/FFFFFF?text=EH", // Placeholder image URL
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 5,
    name: "Guy Hawkins",
    title: "Marketing Lead, Salesforce",
    img: "https://placehold.co/40x40/32CD32/FFFFFF?text=GH", // Placeholder image URL
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 6,
    name: "Darrell Steward",
    title: "UX Researcher, Microsoft",
    img: "https://placehold.co/40x40/FFA07A/000000?text=DS", // Placeholder image URL
    quote:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 7,
    name: "Jane Doe",
    title: "Content Strategist",
    img: "https://placehold.co/40x40/FF6347/FFFFFF?text=JD", // Placeholder image URL
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 8,
    name: "John Smith",
    title: "SEO Consultant",
    img: "https://placehold.co/40x40/4682B4/FFFFFF?text=JS", // Placeholder image URL
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 9,
    name: "Alice Brown",
    title: "Social Media Manager",
    img: "https://placehold.co/40x40/FFD700/000000?text=AB", // Placeholder image URL
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 10,
    name: "Bob White",
    title: "PPC Specialist",
    img: "https://placehold.co/40x40/9370DB/FFFFFF?text=BW", // Placeholder image URL
    quote:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae vitae dicta sunt explicabo.",
  },
];

// Number of testimonial cards to show per "slide"
const itemsPerPage = 4;

const TestimonialCardSection = () => {
  // State to keep track of the starting index of the currently visible testimonials
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate total number of "pages" or slides
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  // Calculate the current page number for pagination dots
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  // Function to handle clicking the "Previous" button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      // If newIndex is less than 0, loop back to the last page
      return newIndex < 0 ? (totalPages - 1) * itemsPerPage : newIndex;
    });
  };

  // Function to handle clicking the "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      // If newIndex goes beyond the total testimonials, loop back to the first page
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  return (
    <section className="bg-red-50 min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
        What They Say About Our Services
      </h2>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* Container for all testimonial cards, with sliding animation */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id} // Use unique ID for key prop
              // flex-shrink-0 prevents cards from shrinking
              // w-full sets initial width, then responsive classes adjust for larger screens
              // The inline style ensures precise width calculation for the sliding effect
              className="flex-shrink-0 p-3 sm:p-4 box-border"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="h-40 pt-3 mb-4"> {/* Fixed height for quote area */}
                  <p className="text-gray-600 line-clamp-4">“{t.quote}”</p> {/* line-clamp to limit lines */}
                </div>
                <div className="bg-gray-100 rounded-lg px-5 py-4 mt-auto"> {/* mt-auto pushes this div to the bottom */}
                  <div className="flex items-center gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/E0E0E0/808080?text=Logo" }} // Fallback image
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-orange-500' : 'bg-gray-300'} transition-colors duration-300`}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCardSection;





