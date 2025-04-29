import React from 'react'

const Solutions = () => {
    const solutions = [
        {
            icon: "fa-globe",
            color: "bg-blue-100",
            iconColor: "text-blue-500",
            title: "Custom AI-Powered Website",
            description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions."
          },
          {
            icon: "fa-user-check",
            color: "bg-green-100",
            iconColor: "text-green-600",
            title: "Enhanced Patient Conversion",
            description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences."
          },
          {
            icon: "fa-comment-dots",
            color: "bg-teal-100",
            iconColor: "text-teal-600",
            title: "Real-Time Query Handling",
            description: "Instant response system for patient inquiries with AI-powered chat support."
          },
          {
            icon: "fa-notes-medical",
            color: "bg-red-100",
            iconColor: "text-red-500",
            title: "Medical Report Analysis",
            description: "Advanced AI analysis of medical reports for quick and accurate patient assessments."
          },
          {
            icon: "fa-magnet",
            color: "bg-purple-100",
            iconColor: "text-purple-600",
            title: "Improved Lead Generation",
            description: "Data-driven lead generation strategies to attract and engage potential patients."
          },
          {
            icon: "fa-database",
            color: "bg-gray-100",
            iconColor: "text-gray-700",
            title: "Comprehensive Healthcare Database",
            description: "Extensive medical information database for accurate patient guidance and support."
          },
          {
            icon: "fa-language",
            color: "bg-yellow-100",
            iconColor: "text-yellow-500",
            title: "Multilingual Support",
            description: "Breaking language barriers with comprehensive multilingual communication tools."
          },
        
       
          {
            icon: "fa-credit-card",
            color: "bg-indigo-100",
            iconColor: "text-indigo-500",
            title: "Seamless Payment Handling",
            description: "Secure and efficient payment processing for medical services globally."
          },
      
       
          {
            icon: "fa-search-dollar",
            color: "bg-pink-100",
            iconColor: "text-pink-600",
            title: "Marketing and SEO Support",
            description: "Optimized digital presence with advanced SEO and marketing strategies."
          }
      ];
  return (
    <div>
       <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group h-64 [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md text-center [backface-visibility:hidden]">
                    <div className={`${solution.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      <i className={`fas ${solution.icon} text-2xl ${solution.iconColor}`}></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-blue-900 p-6 text-white shadow-md text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold mb-4 text-gray-100">{solution.title}</h3>
                    <p className="mb-6">{solution.description}</p>
                    <button className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
