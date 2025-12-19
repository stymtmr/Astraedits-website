"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        poster="https://images.unsplash.com/photo-1574680376510-fdc813580556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3843433/3843433-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 bg-black bg-opacity-50 w-full h-full"></div>
      <div className="relative z-20 mx-auto max-w-3xl text-center">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"
        >
          Transform Your Future Today
        </h1>

        <p
          className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"
        >
          Discover innovative solutions that empower you to achieve your goals and unlock new possibilities.
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            className="block w-full rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            className="block w-full rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;