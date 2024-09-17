import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {NavLink} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../assets/logo.jpg"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white text-black">
      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center py-4">
        <NavLink to="/">
        <img src={logo} style={{height:"35px"}}/>
        </NavLink>
        <NavLink to="/" >
          <div className="text-2xl font-bold mr-80 ml-0 pl-0 pr-16 hover:text-yellow-500">FitnessPro Gym</div>
          </NavLink>
          <div className="hidden md:flex space-x-12 font-semibold">
          <NavLink>
            <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Home</div>
            </NavLink>

            <NavLink to="/About">
            <div className="cursor-pointer hover:text-yellow-300 transition duration-300">About</div>
            </NavLink>

           
            <div className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link smooth to="/#classes" >Classes</Link></div>
            

            
            <div className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link smooth to="/#trainers">Trainers</Link></div>
            

            <NavLink to="/member">
            <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Membership</div>
            </NavLink>

            <NavLink to="/contact">
            <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Contact</div>
            </NavLink>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Home
            </div>
            </NavLink>

            <NavLink to="/About">
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              About
            </div>
            </NavLink>

            <NavLink>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Classes
            </div>
            </NavLink>

            <NavLink>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Trainers
            </div>
            </NavLink>

            <NavLink>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Membership
            </div>
            </NavLink>

            <NavLink>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Contact
            </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}