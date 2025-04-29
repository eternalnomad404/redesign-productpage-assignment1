import React, { useState } from 'react'

const FAQSection = () => {
    
      const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div>
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "What makes GoGetWell.AI different?",
                  answer: "Our platform combines advanced AI technology with deep healthcare industry expertise to deliver solutions that are specifically tailored to the unique needs of healthcare providers and patients."
                },
                {
                  question: "How secure is patient data on your platform?",
                  answer: "We implement state-of-the-art security measures and comply with all relevant healthcare data protection regulations to ensure that patient information remains secure and confidential at all times."
                },
                {
                  question: "Can your system integrate with our existing EMR?",
                  answer: "Yes, our platform is designed to seamlessly integrate with most major Electronic Medical Record systems, ensuring a smooth transition and minimal disruption to your existing workflows."
                },
                {
                  question: "How long does implementation take?",
                  answer: "Implementation typically takes 2-4 weeks, depending on the complexity of your existing systems and the specific solutions you choose to implement."
                },
                {
                  question: "Do you offer customization for specific healthcare specialties?",
                  answer: "Absolutely. We understand that different medical specialties have unique requirements, and our platform can be customized to address the specific needs of your practice or institution."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center cursor-pointer whitespace-nowrap !rounded-button"
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  >
                    {faq.question}
                    <i className={`fas ${activeTab === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-500`}></i>
                  </button>
                  {activeTab === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQSection
