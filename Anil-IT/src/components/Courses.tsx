import React from 'react';
import { Clock, Users, Award, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'AWS Certified Solutions Architect',
      description: 'Master AWS architecture and earn a highly sought-after certification.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '12 weeks',
      students: '2,500+',
      level: 'Intermediate'
    },
    {
      title: 'Microsoft Azure Administrator',
      description: 'Comprehensive training for Azure infrastructure management and certification.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '10 weeks',
      students: '1,800+',
      level: 'Intermediate'
    },
    {
      title: 'Active Directory Management',
      description: 'Learn to design, implement and manage Active Directory infrastructure.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '8 weeks',
      students: '1,200+',
      level: 'All levels'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security concepts and practices for IT professionals.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '6 weeks',
      students: '3,000+',
      level: 'Beginner'
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional IT Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certification courses taught by experienced professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;