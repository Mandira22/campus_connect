import React from "react";

const companyData = [
  { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" },
  { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
];

const InfiniteLogoSlider = () => {
  const logos = [...companyData, ...companyData]; // duplicate once for smooth scroll

  return (
    <>
      <style>{`
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .scrolling-slide {
    animation: scroll 30s linear infinite;
  }
`}</style>

<div className="overflow-hidden bg-gray-100 py-4 sm:py-6">
  <div className="flex min-w-fit scrolling-slide">
    {[...companyData, ...companyData, ...companyData].map((logo, index) => (
      <div
        key={index}
        className="flex flex-col items-center mx-4 sm:mx-8 shrink-0"
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="h-12 sm:h-20 w-auto object-contain mb-1 sm:mb-2"
        />
        <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
          {logo.name}
        </span>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default InfiniteLogoSlider;






