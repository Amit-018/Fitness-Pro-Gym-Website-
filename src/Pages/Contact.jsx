import { useState } from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline' // Import Heroicons v2
import gym from "../assets/gym1.webp"

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white py-20 bg-cover bg-center" style={{ backgroundImage: `url(${gym}) `, opacity:"0.9" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-2xl mb-8 font-semibold">Get in touch with FitnessPro Gym</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                />
              </div>
              <button type="submit" className="w-full bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-gray-600 mr-3 mt-1" /> {/* Heroicon MapPin */}
                <div>
                  <h3 className="font-semibold text-lg text-black">Address</h3>
                  <p className="text-gray-600">123 Fitness Street, Gym City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-gray-600 mr-3 mt-1" /> {/* Heroicon Phone */}
                <div>
                  <h3 className="font-semibold text-lg text-black">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-gray-600 mr-3 mt-1" /> {/* Heroicon Envelope */}
                <div>
                  <h3 className="font-semibold text-lg text-black">Email</h3>
                  <p className="text-gray-600">info@fitnessprogym.com</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-black">Hours of Operation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 5:00 AM - 11:00 PM</li>
                <li>Saturday - Sunday: 7:00 AM - 9:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-black text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112162.10958205313!2d77.15651458929203!3d28.537738131514644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e8d48c853f%3A0xcbe69e3887e710f1!2s21%20Fitness%20Greater%20Kailash!5e0!3m2!1sen!2sin!4v1726574662521!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
