import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const Milestones = () => {
  const milestones = [
    {
      title: 'Project Initiation',
      date: 'June 2024',
      description: 'Project scope definition, team formation, and research planning. Initial literature review and methodology design.',
      completed: true,
    },
    {
      title: 'Data Collection & Preprocessing',
      date: 'July 2024',
      description: 'Collection of comprehensive datasets for corn, soybean, tomato, guava, rice, and eggs. Implementation of preprocessing pipelines for image standardization.',
      completed: true,
    },
    {
      title: 'Initial Model Development',
      date: 'August - September 2024',
      description: 'Development of baseline classification models for each agricultural product. Experimentation with various neural network architectures.',
      completed: true,
    },
    {
      title: 'Model Optimization',
      date: 'Octomber - November 2024',
      description: 'Fine-tuning of models to improve accuracy and performance. Implementation of data augmentation techniques to enhance robustness.',
      completed: true,
    },
    {
      title: 'System Integration',
      date: 'December 2024',
      description: 'Integration of individual models into a unified system. Development of common API and user interface components.',
      completed: true,
    },
    {
      title: 'Application Testing',
      date: 'January 2025',
      description: 'Real-world testing of the integrated system in actual farm environments. Collection of performance metrics and user feedback.',
      completed: true,
    },
    {
      title: 'System Refinement',
      date: 'January - April 2025',
      description: 'Refinement based on field testing results. Optimization for mobile deployment and real-time processing.',
      completed: true,
    },
    {
      title: 'Final Documentation & Presentation',
      date: 'May 2025',
      description: 'Completion of project documentation, research paper preparation, and final presentation development.',
      completed: true,
    },
  ];

  return (
    <section id="milestones" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Project Milestones</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-green-200"></div>
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-12">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-yellow-500'} flex items-center justify-center text-white z-10`}>
                      {milestone.completed ? <CheckCircle size={16} /> : <Clock size={16} />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
                          {milestone.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;