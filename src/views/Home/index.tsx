// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import MissionSection from './components/MissionSection';
import ChallengedWeSolveSection from './components/ChallengedWeSolveSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FAQSection from './components/FAQSection';
import Solutions from './components/Solutions';


const Home: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <Navigation/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Solutions Section */}
     <Solutions/>

      {/* About Us Section */}
      <AboutUs/>

      {/* Mission Section */}
      <MissionSection/>
      {/* Challenges We Solve Section */}
      <ChallengedWeSolveSection/>

      {/* FAQ Section */}
      <FAQSection/>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Lets get in touch!</h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <p className="text-gray-700 mb-6">
                Contact us today to discover how GoGetWell.AI can transform your healthcare operations and enhance patient experiences. Our team of experts is ready to answer your questions and provide personalized solutions.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-blue-500"></i>
                  </div>
                  <span className="text-gray-700">+1 (800) 123-4567</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-blue-500"></i>
                  </div>
                  <span className="text-gray-700">contact@gogetwell.ai</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                  </div>
                  <span className="text-gray-700">123 Innovation Drive, Health Tech Park, CA 94103</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;