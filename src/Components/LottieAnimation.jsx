import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/animation.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="flex flex-col h-auto">
      <div className="text-center p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          Get up to 141% more revenue* with
          <br className="hidden md:inline lg:inline" /> {/* Hide br on mobile screens */}
          our Customer Lifetime Value and
          <br className="hidden md:inline lg:inline" /> {/* Hide br on mobile screens */}
          Likelihood to Purchase segments
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 overflow-hidden">
          <div className="sticky top-0 h-auto">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center p-4 font-bold">
          <p className="text-center text-3xl">Mailchimp will help you focus on your <br/> most loyal and valuable customers.</p>
        </div>
      </div>
    </div>
  );
}

export default LottieAnimation;
