import React from 'react';
import { ArrowRight, Server, Cloud, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Expert IT Solutions & <span className="text-blue-600">Professional Training</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Elevate your IT infrastructure and skills with our comprehensive services and industry-recognized certification courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-lg transition-all"
              >
                Explore Courses
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-blue-600 bg-opacity-10 rounded-3xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <Server className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">IT Infrastructure</h3>
                  <p className="text-gray-600 text-sm">Enterprise-grade solutions for modern businesses</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <Cloud className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Cloud Services</h3>
                  <p className="text-gray-600 text-sm">AWS & Azure certified expertise</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <Shield className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Security</h3>
                  <p className="text-gray-600 text-sm">Protect your digital assets</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Training</h3>
                  <p className="text-gray-600 text-sm">Industry-recognized certifications</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;