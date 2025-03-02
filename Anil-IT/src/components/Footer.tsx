import React from 'react';
import { Server, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Anil-<span className="text-blue-400">IT</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert IT services and professional training to help businesses and individuals excel in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Database Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Network Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AWS Certification</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Azure Administration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Active Directory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">View All Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:aniljada033@gmail.com" className="text-gray-400 hover:text-white transition-colors">aniljada033@gmail.com</a>
              </li>
              <li className="text-gray-400">Hitech City Hyderabad</li>
              <li className="text-gray-400">Mindspace Building No. 11, 500081</li>
              <li className="text-gray-400">+91 9885911903</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Anil-IT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;