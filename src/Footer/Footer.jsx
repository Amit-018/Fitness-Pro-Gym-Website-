import React from 'react'

function Footer() {
  return (
    <>
     <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FitnessPro Gym</h3>
            <p className="text-gray-400">Transforming lives through fitness since 2010.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Classes</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Membership</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Fitness Street, Gym City, ST 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@fitnessprogym.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 FitnessPro Gym. All rights reserved.</p>
        </div>
      </div>
    </footer> 
    </>
  )
}

export default Footer

