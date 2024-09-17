import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} style={{ height: "35px" }} alt="Logo" />
          </NavLink>

          {/* Site Title */}
          <NavLink to="/" className="hidden md:block mr-80 pr-10">
            <div className="text-2xl font-bold hover:text-yellow-500">FitnessPro Gym</div>
          </NavLink>

          {/* Menu Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex space-x-12 font-semibold">
            <NavLink to="/">
              <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Home</div>
            </NavLink>

            <NavLink to="/About">
              <div className="cursor-pointer hover:text-yellow-300 transition duration-300">About</div>
            </NavLink>

            <Link smooth to="/#classes">
              <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Classes</div>
            </Link>

            <Link smooth to="/#trainers">
              <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Trainers</div>
            </Link>

            <NavLink to="/member">
              <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Membership</div>
            </NavLink>

            <NavLink to="/contact">
              <div className="cursor-pointer hover:text-yellow-300 transition duration-300">Contact</div>
            </NavLink>
          </div>

          {/* Hamburger Icon - Shown on mobile */}
          <button
            className="md:hidden flex items-center"
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

      {/* Mobile Menu - Shown when Hamburger Icon is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-4 py-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <div className="block px-4 py-2 text-base font-medium hover:bg-gray-100">Home</div>
            </NavLink>

            <NavLink to="/About" onClick={() => setIsMenuOpen(false)}>
              <div className="block px-4 py-2 text-base font-medium hover:bg-gray-100">About</div>
            </NavLink>

            <Link smooth to="/#classes" onClick={() => setIsMenuOpen(false)}>
              <div className="block px-4 py-2 text-base font-medium hover:bg-gray-100">Classes</div>
            </Link>

            <Link smooth to="/#trainers" onClick={() => setIsMenuOpen(false)}>
              <div className="block px-4 py-2 text-base font-medium hover:bg-gray-100">Trainers</div>
            </Link>

            <NavLink to="/member" onClick={() => setIsMenuOpen(false)}>
              <div className="block px-4 py-2 text-base font-medium hover:bg-gray-100">Membership</div>
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <div className="block px-4 py-2 text-base font-medium hover:bg-gray-100">Contact</div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
