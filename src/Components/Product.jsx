import React from 'react';

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly  bg-white p-6 md:p-12">
      <div className="max-w-lg mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
          Get started easily with a personalized product tour
        </h2>
        <p className="text-zinc-600 mb-4">
          An onboarding specialist is here to help you get started with confidence—it's included with Standard and Premium plans.*
        </p>
        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
          Learn more about onboarding
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
            />
          </svg>
        </a>
      </div>
      <img src="/product.png" alt="Person on a product tour" className="rounded-lg shadow-lg w-full md:w-auto" />
    </div>
  );
};

export default Product;
