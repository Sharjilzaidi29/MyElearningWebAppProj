import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Businesses Through <span className="text-blue-600">IT Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Anil-IT provides cutting-edge IT services and professional training in cloud technologies like AWS and Azure to help businesses thrive in the digital era.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#courses" 
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md border border-blue-200 hover:bg-gray-50 transition duration-300 flex items-center justify-center"
              >
                View Courses
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="IT Services" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;