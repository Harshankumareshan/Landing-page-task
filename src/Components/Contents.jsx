import React, { useState } from 'react';

const Contents = () => {
  const [selectedOption, setSelectedOption] = useState('contentOptimizer'); // Set default option

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  const getImageUrl = (option) => {
    switch (option) {
      case 'contentOptimizer':
        return "lap.PNG";
      case 'creativeAssistant':
        return "lap2.PNG";
      case 'gdprReadyTools':
        return "lap3.PNG";
      default:
        return "lap.PNG"; // Set default image path here
    }
  };

  return (
    <div className="flex bg-customorange items-center h-screen flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-12 space-y-6">
        <h1 className="text-4xl font-bold">Keep customers ready to buy with engaging content</h1>
        <div>
          <h2 className="text-xl font-semibold flex items-center cursor-pointer" onClick={() => handleOptionClick('contentOptimizer')}>
            Content Optimizer
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${selectedOption === 'contentOptimizer' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h2>
          {selectedOption === 'contentOptimizer' && (
            <div className="text-lg">Learn how your emails compare to the top-performing campaigns in your industry and get data-driven suggestions for improving your copy, imagery, and layout.</div>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold flex items-center cursor-pointer" onClick={() => handleOptionClick('creativeAssistant')}>
            Creative Assistant
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${selectedOption === 'creativeAssistant' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h2>
          {selectedOption === 'creativeAssistant' && (
            <div className="text-lg">Our Creative Assistant will help you stand out by using AI to create custom designs for your brand.</div>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold flex items-center cursor-pointer" onClick={() => handleOptionClick('gdprReadyTools')}>
            GDPR ready tools
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${selectedOption === 'gdprReadyTools' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h2>
          {selectedOption === 'gdprReadyTools' && (
            <div className="text-lg">Mailchimp helps you achieve data security and privacy standards for your customers.</div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 overflow-hidden">
        <img src={getImageUrl(selectedOption)} alt={selectedOption} className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default Contents;
