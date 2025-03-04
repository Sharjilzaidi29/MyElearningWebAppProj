import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechSolutions Inc.',
    content: 'Anil-IT transformed our cloud infrastructure completely. Their AWS expertise helped us reduce costs by 40% while improving performance. The team was professional and responsive throughout the project.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'IT Director, GlobalFinance',
    content: 'The Azure Administrator course was comprehensive and practical. The hands-on labs were particularly valuable, and I was able to apply what I learned immediately in my role. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'DevOps Engineer, InnovateTech',
    content: 'Anil-IT\'s cybersecurity services helped us identify and address critical vulnerabilities in our systems. Their proactive approach to security has given us peace of mind and protected our business.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services and courses.
          </p>
        </div>
        
        <div className="mt-12 relative">
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonials[currentIndex].content}"</p>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;