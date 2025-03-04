import React from 'react';
import { Server, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Server className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">Anil-IT</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative IT solutions and professional training.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Database Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">IT Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">AWS Cloud Practitioner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">AWS Solutions Architect</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Azure Fundamentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Azure Administrator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">View All Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition duration-300">Courses</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anil-IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;