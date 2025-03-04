import React from 'react';
import { Cloud, Shield, Code, Database, Cpu, Settings } from 'lucide-react';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud migration, management, and optimization services for AWS and Azure platforms.',
    icon: <Cloud className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving cyber threats and vulnerabilities.',
    icon: <Shield className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs using cutting-edge technologies.',
    icon: <Code className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'Database Management',
    description: 'Expert database design, implementation, and optimization services for optimal performance.',
    icon: <Database className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'IT Infrastructure',
    description: 'Robust IT infrastructure setup and management to ensure seamless business operations.',
    icon: <Cpu className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with your business goals and drive growth.',
    icon: <Settings className="h-10 w-10 text-blue-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of IT services to help businesses leverage technology for growth and success.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;