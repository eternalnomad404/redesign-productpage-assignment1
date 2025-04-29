import React from 'react'

const ChallengedWeSolveSection = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The Challenges We Solve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <img 
                src="/img/HomePage/Challenges1.jpg" 
                alt="Healthcare Challenges" 
                className="rounded-lg shadow-md mb-8 h-64 object-cover object-top"
              />
              <div>
                <p className="text-gray-700 mb-6">
                  In todays healthcare landscape, providers face numerous challenges that impact both operational efficiency and patient satisfaction. From disorganized patient information to delayed bookings and limited accessibility, these issues can significantly hinder the quality of care delivered.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-exclamation-circle text-red-500 text-sm"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-md mb-1">Inefficient Operations</h3>
                      <p className="text-gray-600 text-sm">Manual processes that consume valuable time and resources</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-user-clock text-red-500 text-sm"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-md mb-1">Patient Wait Times</h3>
                      <p className="text-gray-600 text-sm">Extended waiting periods that lead to patient dissatisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <img 
                src="/img/HomePage/Challenges2.jpg" 
                alt="Healthcare Solutions" 
                className="rounded-lg shadow-md mb-8 h-64 object-cover object-top"
              />
              <div>
                <p className="text-gray-700 mb-6">
                  Our AI-powered platform addresses these challenges head-on by providing intelligent solutions that streamline operations, enhance communication, and improve the overall healthcare experience for both providers and patients.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-check-circle text-green-500 text-sm"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-md mb-1">Automated Workflows</h3>
                      <p className="text-gray-600 text-sm">Intelligent systems that reduce administrative burden</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-bolt text-green-500 text-sm"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-md mb-1">Enhanced Efficiency</h3>
                      <p className="text-gray-600 text-sm">Optimized processes that save time and improve outcomes</p>
                    </div>
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

export default ChallengedWeSolveSection
