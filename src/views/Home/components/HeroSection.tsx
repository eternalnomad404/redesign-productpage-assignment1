import React from 'react'

const HeroSection = () => {
  return (
    <div>
         <section className="relative bg-indigo-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/public/img/HomePage/Hero.jpg" 
            alt="Healthcare AI Technology" 
            className="w-full h-full object-cover object-top opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300">AI Front Office</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">For Healthcare Agents</h2>
            <p className="text-blue-300 mb-2">Create AI Store in 2 mins</p>
            <p className="text-gray-300 mb-8">Scale with Digital Marketing</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors duration-300 mr-4 cursor-pointer whitespace-nowrap !rounded-button">Get Started</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-indigo-900/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-white">2100+</h3>
              <p className="text-blue-300">Qualified Doctors</p>
            </div>
            <div className="bg-indigo-900/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-white">1000+</h3>
              <p className="text-blue-300">Hospitals</p>
            </div>
            <div className="bg-indigo-900/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-white">800+</h3>
              <p className="text-blue-300">Treatment Plans</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
