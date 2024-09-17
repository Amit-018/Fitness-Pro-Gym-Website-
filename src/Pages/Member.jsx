'use client'

import { useState } from 'react'
import gym from "../assets/gym1.webp"
import { NavLink } from 'react-router-dom'


export default function Component() {
  const [selectedPlan, setSelectedPlan] = useState('')

  const plans = [
    { name: "Basic", price: "$29.99", features: ["Access to gym equipment", "Locker room access", "1 group class per week"] },
    { name: "Premium", price: "$49.99", features: ["All Basic features", "Unlimited group classes", "1 personal training session per month", "Access to sauna"] },
    { name: "Elite", price: "$79.99", features: ["All Premium features", "4 personal training sessions per month", "Nutritional counseling", "Priority class booking"] },
  ]

  const handleSelectChange = (e) => {
    setSelectedPlan(e.target.value);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white py-20 bg-cover bg-center" style={{ backgroundImage: `url(${gym})` }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">FitnessPro Gym Membership</h1>
          <p className="text-xl mb-8">Choose the plan that fits your fitness goals</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">Select Your Membership Plan</h2>
          
          <select 
            className="w-full mb-8 p-4 border rounded-lg" 
            value={selectedPlan} 
            onChange={handleSelectChange}
          >
            <option value="">Choose a plan</option>
            {plans.map((plan) => (
              <option key={plan.name} value={plan.name}>
                {plan.name} - {plan.price}/month
              </option>
            ))}
          </select>

          {selectedPlan && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{selectedPlan} Plan</h3>
              <p className="text-3xl font-bold text-gray-800 mb-6">
                {plans.find(p => p.name === selectedPlan)?.price}<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="text-gray-600 mb-6 list-disc list-inside">
                {plans.find(p => p.name === selectedPlan)?.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <NavLink to="/signup">
              <button className="w-full bg-gray-800 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Sign Up Now
              </button>
              </NavLink>
            </div>
          )}

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Not sure which plan is right for you? Schedule a free consultation with one of our fitness experts.
            </p>
            <button className="bg-white text-gray-800 border border-gray-800 hover:bg-yellow-500 px-4 py-2 rounded-lg">
              Book a Consultation
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
