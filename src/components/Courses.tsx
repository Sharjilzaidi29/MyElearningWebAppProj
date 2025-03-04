import React from 'react';

const courses = [
  {
    title: 'AWS Cloud Practitioner',
    description: 'Learn the fundamentals of AWS Cloud to kickstart your cloud journey.',
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'AWS Solutions Architect',
    description: 'Master AWS architecture principles and design scalable, reliable systems.',
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Azure Fundamentals',
    description: 'Get started with Microsoft Azure and learn cloud concepts, services, and management tools.',
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Azure Administrator',
    description: 'Learn to implement, monitor, and maintain Microsoft Azure solutions.',
    duration: '6 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Courses</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with our industry-recognized cloud certification courses.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;