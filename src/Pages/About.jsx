import { Calendar, Users, Sparkles, Heart } from 'lucide-react'
import gym from "../assets/gym1.webp"
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white py-20 bg-cover bg-center" style={{ backgroundImage: `url(${gym})`, opacity:"0.9"}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About FitnessPro Gym</h1>
          <p className="text-xl mb-8">Empowering Your Fitness Journey Since 2005</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            At FitnessPro Gym, our mission is to inspire and support individuals in achieving their fitness goals, fostering a community of health-conscious individuals, and promoting overall well-being through state-of-the-art facilities, expert guidance, and innovative fitness programs.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Why Choose FitnessPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Calendar className="h-12 w-12 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-black">24/7 Access</h3>
              <p className="text-gray-600">Work out on your schedule with round-the-clock gym access.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="h-12 w-12 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-black">Expert Trainers</h3>
              <p className="text-gray-600">Get guidance from our certified and experienced fitness professionals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Sparkles className="h-12 w-12 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-black">Modern Equipment</h3>
              <p className="text-gray-600">Train with the latest and most advanced fitness equipment.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Heart className="h-12 w-12 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-black">Supportive Community</h3>
              <p className="text-gray-600">Join a motivating community of like-minded fitness enthusiasts.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2005, FitnessPro Gym started as a small, local gym with a big vision: to create a fitness center that caters to all levels of fitness enthusiasts, from beginners to advanced athletes.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, we've grown into a state-of-the-art facility, constantly updating our equipment and expanding our class offerings to meet the evolving needs of our members. Our commitment to personal attention and fostering a supportive community has remained at the core of our philosophy.
            </p>
            <p className="text-lg text-gray-700">
              Today, FitnessPro Gym is proud to be a leader in the fitness industry, helping thousands of members achieve their health and wellness goals. We continue to innovate and grow, always with our members' success as our top priority.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center text-black">Join Us Today</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Experience the FitnessPro difference and start your journey to a healthier, stronger you.
          </p>
          <div className="text-center">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
