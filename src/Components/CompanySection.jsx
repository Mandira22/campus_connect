import React from 'react';

const FeaturedIn = () => {
  const logos = [
    { name: 'Slack', src: 'slack-logo.png', alt: 'Slack Logo' }, // Replace with actual image paths
    { name: 'GeekWire', src: 'geekwire-logo.png', alt: 'GeekWire Logo' },
    { name: 'Forbes', src: 'forbes-logo.png', alt: 'Forbes Logo' },
    { name: 'USA Today', src: 'usa-today-logo.png', alt: 'USA Today Logo' },
    { name: 'Envato', src: 'envato-logo.png', alt: 'Envato Logo' },
  ];

  return (
    <div className="py-15 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;