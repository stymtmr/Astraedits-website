import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center lg:justify-between">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Body?
          </h2>

          <p className="mt-4 max-w-lg text-lg">
            Join now and get a personalized fitness plan to achieve the results you've always wanted.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:mt-0 lg:flex-shrink-0">
          <a
            className="block w-full rounded-md border border-white bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow transition-transform hover:-translate-y-1 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-blue-50 sm:w-auto"
            href="#"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
