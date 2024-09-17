import { useState } from 'react'
import { Link } from 'react-router-dom'
import gym from "../assets/gym1.webp"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // Handle form submission (e.g., send data to server)
    console.log('Sign In Form Submitted:', formData)

    // Optionally reset form
    setFormData({
      email: '',
      password: ''
    })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${gym})`, opacity: "0.9" }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Welcome back to FitnessPro Gym
        </h2>
        <p className="mt-2 text-center text-sm text-white">
          Don't have an account?{" "}
          <Link to="/sign-up" className="font-medium text-white hover:text-yellow-500">
            Sign up here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-gray-800 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-gray-800 hover:text-yellow-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              By signing in, you agree to our{" "}
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
