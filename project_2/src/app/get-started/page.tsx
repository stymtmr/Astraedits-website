"use client"
import React from 'react';
import Input from '@/components/Input';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-lg p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Start Your Journey
        </h2>
        <form className="space-y-6">
          <Input label="Full Name" type="text" name="fullname" placeholder="John Doe" required />
          <Input label="Age" type="number" name="age" placeholder="25" required />
          <Input label="Height" type="text" name="height" placeholder="5'10&quot;" required />
          <Input label="Weight" type="text" name="weight" placeholder="180 lbs" required />
          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-300">
              Goal
            </label>
            <select
              name="goal"
              id="goal"
              required
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            >
              <option value="">Select your goal</option>
              <option value="lose-fat">Lose Fat</option>
              <option value="build-muscle">Build Muscle</option>
              <option value="get-in-shape">Get in Shape</option>
            </select>
          </div>
          <Input label="Contact Number" type="tel" name="phone" placeholder="123-456-7890" required />
          <Input label="Email" type="email" name="email" placeholder="john.doe@example.com" required />
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
