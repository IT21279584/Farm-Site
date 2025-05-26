import React, { useState } from 'react';
import { Leaf, Egg, Apple, Wheat } from 'lucide-react';

const ResearchComponents = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const components = [
    {
      id: 0,
      title: "Corn & Soybean Seeds Quality Classification",
      icon: <Wheat className="w-6 h-6" />,
      description:
        "Advanced classification system for identifying quality parameters in corn and soybean samples.",
      details: [
        "Classification of pure, broken, discolored, and skin-damaged specimens",
        "Multi-stage CNN architecture for feature extraction and classification",
        "Real-time processing capabilities for in-field use",
        "Accuracy exceeding 95% across different lighting conditions",
        "Integration with web devices for immediate assessment",
      ],
      imageUrl:
        "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      title: "Tomato & Guava Quality Classification",
      icon: <Apple className="w-6 h-6" />,
      description:
        "Comprehensive quality assessment system for tomatoes and guavas using computer vision.",
      details: [
        "Classification into high, medium, and low quality categories",
        "Feature extraction based on color, texture, and morphological characteristics",
        "Specialized preprocessing for varying fruit ripeness stages",
        "Integration with sorting machinery for automated quality control",
        "Support for multiple tomato and guava varieties",
      ],
      imageUrl:
        "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Rice Leaf Disease Identification",
      icon: <Leaf className="w-6 h-6" />,
      description:
        "Early detection system for common rice leaf diseases to enable timely intervention.",
      details: [
        "Identification of healthy leaves, bacterial blight, and brown spot",
        "Field-deployable model optimized for mobile devices",
        "Progressive disease stage classification",
        "Integration with treatment recommendation system",
        "Support for different rice varieties and growth stages",
      ],
      imageUrl:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/pexels-ashutoshsonwani-1509607+(1).jpg",
    },
    {
      id: 3,
      title: "Egg Quality Classification",
      icon: <Egg className="w-6 h-6" />,
      description:
        "Automated system for sorting eggs based on quality parameters and defect detection.",
      details: [
        "Classification of white good eggs, brown good eggs, brown cracked eggs, white cracked eggs, and dirty eggs",
        "Non-destructive assessment techniques",
        "High-throughput processing for commercial applications",
        "Integration with packaging systems",
        "Adaptable to different egg sizes and shell colors",
      ],
      imageUrl:
        "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="py-16 text-justify bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Research Components
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
          Our research addresses four key areas in agricultural quality
          assessment and disease identification, each with specialized AI models
          and practical applications.
        </p>

        <div className="flex flex-wrap justify-center mb-8">
          {components.map((component) => (
            <button
              key={component.id}
              onClick={() => setActiveTab(component.id)}
              className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-full transition-all ${
                activeTab === component.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-50"
              }`}
            >
              <span className="mr-2">{component.icon}</span>
              <span className="text-sm font-medium md:text-base">
                {component.title}
              </span>
            </button>
          ))}
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={components[activeTab].imageUrl}
                alt={components[activeTab].title}
                className="object-cover w-full h-64 md:h-full"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {components[activeTab].title}
              </h3>
              <p className="mb-6 text-gray-600">
                {components[activeTab].description}
              </p>
              <h4 className="mb-3 font-semibold text-gray-800">
                Key Features:
              </h4>
              <ul className="space-y-2">
                {components[activeTab].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-green-500">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchComponents;