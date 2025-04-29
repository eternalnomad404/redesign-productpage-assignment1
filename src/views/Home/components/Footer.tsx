import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-indigo-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">go<span className="text-blue-400">GetWell</span>.ai</h3>
              <p className="text-gray-300 mb-4">Revolutionizing healthcare with AI-powered solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">AI-Powered Websites</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Patient Conversations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Medical Analysis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Healthcare Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Our Mission</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-indigo-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 GoGetWell.AI. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
              <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
