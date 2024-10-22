import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block bg-white shadow-md'> {/* Navbar background and shadow */}
      <div className="container">
        <div className="flex justify-between items-center py-4 text-blackish font-medium">
          {/* Navigation Links */}
          <div className="flex w-fit gap-10 mx-auto">
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              CATEGORIES
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              MEN&apos;S {/* Escape the apostrophe with &apos; */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              WOMEN&apos;S {/* Escape the apostrophe with &apos; */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              JEWELRY
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              PERFUME
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              BLOG
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link className="navbar_link relative hover:text-blue-600 transition duration-300" href="#">
              HOT OFFERS
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </div>
          
          {/* Your Name */}
          <div className="text-gray-700 font-semibold">
            Created by Osama
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
