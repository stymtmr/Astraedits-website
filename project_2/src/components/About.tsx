import React from 'react';
import { FaDumbbell, FaBullseye, FaHeartbeat } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">What I Do</h2>
          <p className="text-gray-600 mt-2">I help you achieve your fitness goals through personalized plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaDumbbell className="text-5xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Personalized Workouts</h3>
            <p className="text-gray-600">
              Custom-tailored workout plans to fit your needs and goals.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaBullseye className="text-5xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Nutritional Guidance</h3>
            <p className="text-gray-600">
              Expert advice on what to eat to complement your training.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaHeartbeat className="text-5xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Regular check-ins and adjustments to keep you on track.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <a
              href="#"
              className="inline-block rounded-md bg-blue-500 px-12 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-1 hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Start Your Journey
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;