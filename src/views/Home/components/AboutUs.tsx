import React from 'react'

const AboutUs = () => {
  return (
    <div>
       <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/img/HomePage/AboutUs.jpg" 
                alt="Healthcare Team" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <p className="text-gray-700 mb-6">
              We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.


              </p>
              <p className="text-gray-700 mb-6">
              Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-medal text-blue-500"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Modern Solutions</h3>
                    <p className="text-gray-600">Leveraging AI technology for healthcare</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-users text-green-500"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Patient-Centric</h3>
                    <p className="text-gray-600">Personalized healthcare experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
