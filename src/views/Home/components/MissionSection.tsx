import React from 'react'

const MissionSection = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
              <p className="text-gray-700 mb-6">
              Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
              </p>
              <p className="text-gray-700 mb-6">
              We strive to become the leading platform for healthcare tourism management and digital transformation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-heartbeat text-indigo-500"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI-Powered Solutions</h3>
                    <p className="text-gray-600">Optimizing operations with advanced technology</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-cogs text-purple-500"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Growth Focus</h3>
                    <p className="text-gray-600">Maximizing revenue and opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/img/HomePage/Mission.jpg" 
                alt="Healthcare Mission" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MissionSection
