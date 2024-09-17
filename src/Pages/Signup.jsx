import { useState } from 'react'
import { Link } from 'react-router-dom'
import gym from "../assets/gym1.webp"

export default function Component() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    membershipType: '',
    referralCode: ''
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
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      membershipType: '',
      referralCode: ''
    })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 " style={{ backgroundImage: `url(${gym})`, opacity:"0.9"}}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign up for FitnessPro Gym
        </h2>
        <p className="mt-2 text-center text-sm text-white">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-white hover:text-yellow-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="membershipType">Membership Type</label>
              <select
                id="membershipType"
                name="membershipType"
                required
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              >
                <option value="" disabled>Select a membership type</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="elite">Elite</option>
              </select>
            </div>

            <div>
              <label htmlFor="referralCode">Referral Code (Optional)</label>
              <input
                id="referralCode"
                name="referralCode"
                type="text"
                value={formData.referralCode}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <button type="submit" className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="font-medium text-gray-800 hover:text-gray-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-medium text-gray-800 hover:text-gray-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
