import React from 'react';
import { CalendarDaysIcon, ClockIcon, UserGroupIcon, HeartIcon, SparklesIcon, TrophyIcon } from '@heroicons/react/24/outline';
import gym from "../assets/gym1.webp"
import gyminfraa from "../assets/gyminfraa.jpg"
import treadmill from "../assets/treadmill.jpeg"
import weight from "../assets/Weight Machines.jpg"
import bag from "../assets/bikes.png"
import yoga from "../assets/yoga.jpg"
import rowing from "../assets/rowing2.jpg"
import dumbells from "../assets/dumbells.jpg"
import diet from "../assets/Diet.jpg"
import trainer1 from "../assets/trainee2.jpeg"
import trainer2 from "../assets/trainer4.jpg"
import trainer3 from "../assets/trainee3.jpg"
import trainer4 from "../assets/trainee1.webp"
import {NavLink} from "react-router-dom"
export default function GymHomepage() {

  const plans = [
    { name: "Basic", price: "$29.99", features: ["Access to gym equipment", "Locker room access", "1 group class per week"] },
    { name: "Premium", price: "$49.99", features: ["All Basic features", "Unlimited group classes", "1 personal training session per month", "Access to sauna"] },
    { name: "Elite", price: "$79.99", features: ["All Premium features", "4 personal training sessions per month", "Nutritional counseling", "Priority class booking"] },
  ];
  const testimonials = [
    { name: 'Alice', quote: "FitnessPro Gym has completely transformed my life. I've never felt healthier or more confident!", rating: 5 },
    { name: 'Bob', quote: "The trainers here are top-notch. They've helped me achieve goals I never thought possible.", rating: 5 },
    { name: 'Carol', quote: "I love the variety of classes and equipment. There's always something new to try and keep me motivated.", rating: 4 },
    { name: 'David', quote: "The 24/7 access is perfect for my busy schedule. I can work out whenever it suits me best.", rating: 5 },
    { name: 'Eva', quote: "The personalized diet plan has been a game-changer for me. I'm seeing results faster than ever.", rating: 5 },
    { name: 'Frank', quote: "Great community atmosphere. I've made new friends and we motivate each other to keep pushing.", rating: 4 },
  ];
  const trainers = [
    { name: 'John Doe', specialty: 'Strength Training', bio: 'With over 10 years of experience, John specializes in helping clients build muscle and increase strength.' },
    { name: 'Jane Smith', specialty: 'Yoga and Pilates', bio: 'Jane is a certified yoga instructor with a passion for helping clients improve flexibility and find inner peace.' },
    { name: 'Mike Johnson', specialty: 'Cardio and HIIT', bio: 'Mike high-energy workouts are perfect for those looking to boost their cardiovascular fitness and burn fat.' },
    { name: 'Sarah Brown', specialty: 'Nutrition and Weight Loss', bio: 'As a nutritionist, Sarah helps clients develop healthy eating habits and achieve their weight loss goals.' },
  ];

  const features = [
    { icon: CalendarDaysIcon, title: "24/7 Access", description: "Our gym is open round the clock, allowing you to work out on your schedule." },
    { icon: UserGroupIcon, title: "Expert Trainers", description: "Our certified trainers are here to guide and motivate you every step of the way." },
    { icon: SparklesIcon, title: "Modern Equipment", description: "We offer the latest in fitness technology to enhance your workout experience." },
    { icon: HeartIcon, title: "Health Monitoring", description: "Track your progress with our advanced health monitoring systems." },
    { icon: ClockIcon, title: "Flexible Memberships", description: "Choose from a variety of membership options to suit your needs and budget." },
    { icon: TrophyIcon, title: "Regular Challenges", description: "Participate in our fitness challenges and compete with fellow members." },
  ];

  const classes = [
    { name: "Yoga", description: "Find your inner peace and improve flexibility.", time: "Mon, Wed, Fri 8:00 AM" },
    { name: "HIIT", description: "High-intensity interval training for maximum calorie burn.", time: "Tue, Thu 6:00 PM" },
    { name: "Spinning", description: "Intense cardio workout on stationary bikes.", time: "Mon, Wed, Fri 7:00 PM" },
    { name: "Strength Training", description: "Build muscle and increase your metabolism.", time: "Tue, Thu, Sat 10:00 AM" },
    { name: "Pilates", description: "Improve your core strength and posture.", time: "Wed, Fri 9:00 AM" },
    { name: "Zumba", description: "Dance your way to fitness with this fun workout.", time: "Mon, Thu 7:00 PM" },
  ];
  
  return (
    <>

<div className=" text-white py-20 bg-cover bg-center"style={{ backgroundImage: `url(${gym})`, opacity:"0.9"}}  >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to FitnessPro Gym</h1>
        <p className="text-xl mb-8">Transform Your Body, Transform Your Life</p>
        <NavLink to="/member">
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Join Now
        </button>
        </NavLink>
      </div>
    </div>



    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-black">About FitnessPro Gym</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img src={gyminfraa} alt="Gym Interior" className="rounded-lg shadow-lg h-80 mt-4" />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-14 font-semibold ">
            <p className="text-lg mb-4 text-gray-800">
              At FitnessPro Gym, we're dedicated to helping you achieve your fitness goals in a state-of-the-art facility with expert guidance and support.
            </p>
            <p className="text-lg mb-4 text-gray-800">
              Our gym offers a wide range of equipment, classes, and personalized training programs to suit all fitness levels and preferences.
            </p>
            <p className="text-lg text-gray-800">
              Join our community of fitness enthusiasts and start your journey to a healthier, stronger you today!
            </p>
          </div>
        </div>
      </div>
    </section>



    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Why Choose FitnessPro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <feature.icon className="h-12 w-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-black">State-of-the-Art Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Treadmills', 'Weight Machines', 'Free Weights', 'Rowing Machines', 'Stationary Bikes', 'Yoga Mats'].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img src={
                item==="Treadmills"
                ?treadmill
                :item==="Weight Machines"
                ?weight
                :item==="Free Weights"
                ?dumbells
                :item==="Rowing Machines"
                ?rowing
                :item==="Stationary Bikes"
                ?bag
                :yoga



              } alt={item} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2 text-black">{item}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </div>
    </section>

 
    <section className="py-20 bg-gray-200" id='classes'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-black">Our Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{cls.name}</h3>
              <p className="text-gray-600 mb-4">{cls.description}</p>
              <p className="text-sm text-gray-500">{cls.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-black">Personalized Diet Plans</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img src={diet} alt="Healthy Diet" className="rounded-3xl  shadow-lg h-85" />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-12 ">
            <h3 className="text-2xl font-semibold mb-4 text-black">Fuel Your Fitness Journey</h3>
            <p className="text-lg mb-4 text-gray-800">
              Our expert nutritionists work with you to create a personalized diet plan that complements your fitness goals and lifestyle.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 text-gray-800">
              <li>Customized meal plans</li>
              <li>Macro-nutrient balanced diets</li>
              <li>Supplement recommendations</li>
              <li>Regular check-ins and adjustments</li>
            </ul>
            <p className="text-lg text-gray-800">
              Whether you're looking to lose weight, build muscle, or improve your overall health, our diet plans are designed to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-200" id='trainers'>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-center text-black">Our Expert Trainers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {trainers.map((trainer, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
          <img 
            src={
              trainer.name === "John Doe"
                ? trainer1
                : trainer.name === "Jane Smith"
                ? trainer4
                : trainer.name === "Mike Johnson"
                ? trainer3
                : trainer2
            } 
            alt={trainer.name} 
            className="w-40 h-40 rounded-full mx-auto mb-4" 
          />
          <h3 className="text-xl font-semibold mb-2 text-black">{trainer.name}</h3>
          <p className="text-gray-600 mb-2">{trainer.specialty}</p>
          <p className="text-sm text-gray-500">{trainer.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>







    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-black">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4 text-gray-800">`{testimonial.quote}`</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">- {testimonial.name}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>





    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-black">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-black">{plan.name}</h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="text-gray-600 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <NavLink to="/member">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                Choose Plan
              </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
        <p className="text-xl mb-8">Join FitnessPro Gym today and transform your life!</p>
        <NavLink to="/signup">
        <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Sign Up Now
        </button>
        </NavLink>
      </div>
    </section>
    </>
  );
}