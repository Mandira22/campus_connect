import React from "react";

export default function SubscribeSection() {
  return (
    <div className="bg-red-100 py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Subscribe to get instant job alerts
      </h2>
      <p className="text-gray-600 mb-8">
        Don’t wanna miss something? Subscribe right now and get special promotion and monthly newsletter
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-2 rounded-md w-full sm:w-auto border border-gray-300 focus:outline-none"
        />
        <button className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition">
          Explore Now
        </button>
      </form>

      <div className="mt-16 flex justify-between items-center flex-wrap text-sm text-gray-600 max-w-4xl mx-auto">
        
        <div className="flex gap-4 text-xl mb-2">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="bg-red-50 text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Interested in Collaborating?</h2>
        <p className="text-gray-600 mb-2">Let's discuss your next project!</p>
        <a href="#" className="text-blue-600 hover:underline mb-4 block">Book a call</a>

        <p className="text-gray-700 mb-1">Reach Us on Email / Slack:</p>
        <a href="mailto:uxwizard1@gmail.com" className="text-blue-600 hover:underline mb-4 block">uxwizard1@gmail.com</a>

        <p className="text-gray-700 mb-1">Connect with Us:</p>
        <div className="text-blue-600 space-x-2">
          <a href="#" className="hover:underline">WhatsApp</a>
          <span>|</span>
          <a href="#" className="hover:underline">Telegram</a>
          <span>|</span>
          <a href="#" className="hover:underline">Skype</a>
          <span>|</span>
          <a href="#" className="hover:underline">Wechat</a>
        </div>
      </div>
    </div>
    

    
  );
};

