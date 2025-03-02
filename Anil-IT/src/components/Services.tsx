import React from 'react';
import { Server, Cloud, Shield, Database, Network, Users, HardDrive, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Server className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'IT Infrastructure',
      description: 'Design, implementation and management of robust IT infrastructure tailored to your business needs.'
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Cloud Services',
      description: 'Expert AWS and Azure solutions including migration, optimization, and management.'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security assessments, implementation, and monitoring to protect your digital assets.'
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Database Management',
      description: 'Optimization, maintenance, and support for all major database platforms.'
    },
    {
      icon: <Network className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Network Solutions',
      description: 'Design and implementation of secure, scalable, and high-performance networks.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Active Directory',
      description: 'Setup, management, and troubleshooting of Active Directory environments.'
    },
    {
      icon: <HardDrive className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Virtualization',
      description: 'VMware and Hyper-V solutions to maximize your hardware investments.'
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'IT Support',
      description: '24/7 technical support and maintenance for all your IT systems.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to optimize your business operations and drive growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;