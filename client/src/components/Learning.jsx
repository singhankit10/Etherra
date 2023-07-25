import React from 'react';

const Learning = () => {
  return (
    <div className="flex justify-start items-center gradient-bg-learning p-8" id="learning">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold text-white mb-4">Learn More About Ethereum</h1>
        <p className="text-white mb-8">
          Here are some resources to help you dive deeper into Ethereum and its ecosystem:
        </p>
      </div>
      <div className="w-1/2">
        {/* List of resources */}
        <div className="grid gap-4">
          <div className={`rounded-md flex justify-center items-center white-glassmorphism p-4 cursor-pointer hover:shadow-xl`}>
            <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer" className="text-white font-bold">Official Ethereum Website</a>
          </div>
          <div className={`rounded-md flex justify-center items-center white-glassmorphism p-4 cursor-pointer hover:shadow-xl`}>
            <a href="https://ethereum.org/en/developers/docs/intro-to-ethereum/" target="_blank" rel="noopener noreferrer" className="text-white font-bold">What is a Blockchain?</a>
          </div>
          <div className={`rounded-md flex justify-center items-center white-glassmorphism p-4 cursor-pointer hover:shadow-xl`}>
            <a href="https://ethereum.org/en/wallets/" target="_blank" rel="noopener noreferrer" className="text-white font-bold">Ethereum Wallets</a>
          </div>
          {/* Add more resources as needed */}
        </div>
      </div>
    </div>
  );
};

export default Learning;
