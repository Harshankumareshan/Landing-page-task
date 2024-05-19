import React from 'react';

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="flex flex-col bg-customorange shadow-sm">
      <div className="relative mb-4 overflow-hidden">
        <img src="/card1.png" alt="Email Automations" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-black">
          Convert with email automations
        </h2>
      </div>
      <p className="bg-customorange text-lg text-black p-4 mb-6">Boost orders and customer lifetime value by dynamically personalizing emails based on browsing .</p>
      <button className="text-black text-lg font-bold border border-black border-opacity-50 px-2 py-3 rounded-full transition duration-600 transform hover:translate-y-3 hover:shadow-inset-b-black hover:shadow-xl mb-12">
        Explore marketing automation
      </button>
    </div>
      <div className="flex flex-col bg-white shadow-sm">
        <div className="relative mb-4 overflow-hidden">
          <img src="/card2.png" alt="Generative AI" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
          <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-black">
            Create faster with generative AI
          </h2>
        </div>
        <p className="bg-white text-lg text-black p-4 mb-6">Effortlessly create on-brand content with generative AI tools and choose from expertly designed.</p>
        <button className="text-black text-lg font-bold border border-black border-opacity-50 px-2 py-3 rounded-full transition duration-600 transform hover:translate-y-3 hover:shadow-inset-b-black hover:shadow-xl">
          Explore AI tools
        </button>
      </div>
      <div className="flex flex-col bg-customsand shadow-sm">
        <div className="relative mb-4 overflow-hidden">
          <img src="/card4.png" alt="Segmentation" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
          <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-black">
            Refine with segmentation
          </h2>
        </div>
        <p className="bg-customsand text-lg text-black p-4 mb-6">Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.</p>
        <button className="text-black text-lg font-bold border border-black border-opacity-50 px-2 py-3 rounded-full transition duration-600 transform hover:translate-y-3 hover:shadow-inset-b-black hover:shadow-xl">
          Explore audience management
        </button>
      </div>
      <div className="flex flex-col bg-customsandal shadow-sm">
        <div className="relative mb-4 overflow-hidden">
          <img src="/card3.png" alt="Analytics & Reporting" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
          <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-black">
            Optimize with analytics & reporting
          </h2>
        </div>
        <p className="bg-customsandal text-lg text-black p-4 mb-6">Analyze performance with custom reports, funnel visualizations, and industry benchmarking.</p>
        <button className="text-black text-lg font-bold border border-black border-opacity-50 px-2 py-3 rounded-full transition duration-600 transform hover:translate-y-3 hover:shadow-inset-b-black hover:shadow-xl ">
          Explore analytics & reporting
        </button>
      </div>
    </div>
  );
};

export default Card;
