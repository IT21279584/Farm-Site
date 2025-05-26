import React from 'react';

const Technologies = () => {
  const techData = [
    {
      name: "Python",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      description:
        "Primary programming language for AI model development and data processing",
    },
    {
      name: "React",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "Frontend framework for web interface development",
    },
    {
      name: "TensorFlow",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      description: "Deep learning framework for neural network model training",
    },
    {
      name: "Keras",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      description: "High-level neural networks API for fast experimentation",
    },
    {
      name: "MongoDB",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      description: "Database for storing research data and model results",
    },
    {
      name: "Firebase",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      description: "Platform for mobile application development and hosting",
    },
    {
      name: "AWS",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description:
        "Scalable cloud infrastructure and services for deploying and managing AI models",
    },

    {
      name: "Kaggle",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png",
      description:
        "Platform for data science competitions and model training with free GPU and TPU resources",
    },
    {
      name: "Docker",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      description:
        "Container platform for consistent development and deployment",
    },
    {
      name: "Google Colab",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
      description:
        "Cloud-based Jupyter notebook environment for model training",
    },
    {
      name: "PyTorch",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
      description:
        "An open-source machine learning library for deep learning and AI model development",
    },
    {
      name: "JWT",
      imageUrl: "https://jwt.io/img/pic_logo.svg",
      description: "Secure authentication for web and mobile applications",
    },
  ];

  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Technologies Used</h2>
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techData.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-white rounded-full shadow-md hover:shadow-lg aspect-square"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4">
                <img 
                  src={tech.imageUrl} 
                  alt={`${tech.name} logo`} 
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <p className="font-medium text-center text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;