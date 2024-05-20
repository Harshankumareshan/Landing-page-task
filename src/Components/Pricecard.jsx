import React, { useState } from 'react';

const Pricecard = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const priceCards = [
    {
      title: "Premium",
      des: "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
      amount: "23000",
      discountedAmount: "11500",
      features: ["✓ Priority Support", "✓ Custom-coded and Pre-built Email Templates", "✓ Multivariate and A/B Testing", "✓ Enhanced Automated Customer Journeys", "✓ Dedicated Personalized Onboarding", "✓ Predictive Segmentation", "✓ Campaign Manager"],
      buttonText: "Buy Now",
      buttonColor: selectedPlan === "Premium" ? "bg-yellow-400" : "bg-transparent border border-black",
    },
    {
      title: "Standard",
      des: "Sell even more with personalization, optimization tools, and enhanced automations.",
      amount: "1150",
      discountedAmount: "575",
      features: ["✓ 24/7 Email & Chat Support", "✓ Custom-coded and Pre-built Email Templates", "✓ Multivariate & A/B Testing", "✓ Enhanced Automated Customer Journeys", "✓ Personalized Onboarding", "✓ Predictive Segmentation", "✓ Campaign Manager"],
      buttonText: "Buy Now",
      buttonColor: selectedPlan === "Standard" ? "bg-yellow-400" : "bg-transparent border border-black",
    },
    {
      title: "Essentials",
      des: "Send the right content at the right time with testing and scheduling features.",
      amount: "770",
      discountedAmount: "385",
      features: ["✓ 24/7 Email & Chat Support", "✓ Pre-built Email Templates", "✓ A/B Testing", "✓ Basic Automated Customer Journeys", "✓ Personalized Onboarding", "✓ Predictive Segmentation", "✓ Campaign Manager"],
      buttonText: "Buy Now",
      buttonColor: selectedPlan === "Essentials" ? "bg-yellow-400" : "bg-transparent border border-black",
    },
    {
      title: "Free",
      des: "Easily create email campaigns and learn more about your customers.",
      amount: "0",
      features: ["✓ Email support for first 30 days", "✓ Pre-built Email Templates", "✓ A/B Testing", "✗ Onboarding", "✗ Predictive Segmentation", "✓ Basic Automated Customer Journeys", "✓ Predictive Segmentation", "✗ Campaign Manager"],
      buttonText: "Sign Up Free",
      buttonColor: selectedPlan === "Free" ? "bg-yellow-400" : "bg-transparent border border-black",
    }
  ];

  return (
    <div className="bg-zinc-100 p-8 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p>Limited Time Offer</p>
          <h1 className="text-3xl font-bold">Save 50% for 12 months</h1>
        </div>

        <div className="flex justify-center mb-12">
          <select
            className="border border-black p-2 rounded"
            value={selectedPlan}
            onChange={(e) => handlePlanSelect(e.target.value)}
          >
            <option value="Premium">Premium</option>
            <option value="Standard">Standard</option>
            <option value="Essentials">Essentials</option>
            <option value="Free">Free</option>
          </select>
          <button className="bg-blue-500 text-black p-2 ml-2 rounded">Submit</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {priceCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white p-8 border border-black shadow-lg transform transition-all duration-300 ${selectedPlan === card.title ? 'scale-105 z-10' : 'scale-100 z-0'}`}
            >
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              <p className="text-sm mb-4">{card.des}</p>
              <h4 className="text-sm mb-4"><hr className="my-4" /></h4>
              <p className="text-black-600 mb-4">
                {`Starts at `}
                <h2 className="text-xl font-bold mb-4"><del>₹{card.amount}</del></h2>
                {card.discountedAmount ? ` ₹${card.discountedAmount}/month for 12 months*` : ''}
              </p>
              <ul className="mb-4">
                {card.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <hr className="my-4" />
              <button className={`text-black w-full py-2 rounded ${card.buttonColor}`}>
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricecard;
