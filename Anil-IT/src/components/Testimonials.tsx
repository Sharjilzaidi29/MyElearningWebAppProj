import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'IT Director, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'Anil-IT transformed our infrastructure with their Azure expertise. Their training programs have significantly improved our team\'s capabilities.'
    },
    {
      name: 'Michael Chen',
      position: 'Network Administrator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'The AWS certification course was comprehensive and practical. I was able to implement what I learned immediately in my workplace.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'CTO, StartupHub',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'Their Active Directory management course helped us streamline our user management processes and improve security across our organization.'
    },
    {
      name: 'David Wilson',
      position: 'Systems Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'The cybersecurity training from Anil-IT was eye-opening. We have implemented several of their recommended practices and seen immediate improvements.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers and businesses with our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-50 rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-200" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-600 text-center">{testimonials[currentIndex].position}</p>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-lg md:text-xl text-gray-700 italic relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white hover:bg-gray-100 text-blue-600 p-2 rounded-full shadow-sm transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white hover:bg-gray-100 text-blue-600 p-2 rounded-full shadow-sm transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;