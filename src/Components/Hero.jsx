import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white p-10 text-center">
      <h1 className="text-4xl lg:text-6xl font-semibold mb-4">Turn Emails into Revenue</h1>
      <p className="text-base lg:text-lg mb-6">
        Win new customers with the #1 email marketing and automations<br/><span>platform* that recommends ways to
        get more opens, clicks, and</span> <br /> sales.
      </p>
      <button
    className="bg-yellow-400 text-black font-bold border border-black px-4 py-4 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
  >
    Sign Up
  </button>
    </div>
  );
};

export default Hero;
