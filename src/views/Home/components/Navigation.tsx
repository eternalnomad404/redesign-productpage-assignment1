import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className="bg-indigo-950 text-white py-3 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold">go<span className="text-blue-400">GetWell</span>.ai</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm hover:text-blue-300">Home</a>
          <a href="#" className="text-sm hover:text-blue-300">Solutions</a>
          <a href="#" className="text-sm hover:text-blue-300">About</a>
          <a href="#" className="text-sm hover:text-blue-300">Contact</a>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-sm px-4 py-1 border border-white rounded-md hover:bg-white hover:text-indigo-950 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">Log in</button>
          <button className="text-sm px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">Sign up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
