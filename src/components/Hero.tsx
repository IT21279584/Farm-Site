import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 bg-gradient-to-b from-green-50 to-white"
    >
      {/* Hero background image section - full width */}
      <div
        className="relative w-full h-[90vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/slide-three.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Centered white text */}
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            AI-Driven Agricultural Diagnostics and Quality Assessment for
            Farming
          </h1>
          <p className="mb-10 text-lg leading-relaxed md:text-xl">
            Advancing agriculture through intelligent diagnostics and quality
            assessment systems for improved crop health and food safety.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#scope"
              className="px-8 py-3 text-white transition-colors bg-green-600 rounded-md shadow-md hover:bg-green-700"
            >
              Learn More
            </a>
            <a
              href="#documents"
              className="px-8 py-3 text-green-600 transition-colors bg-white border border-green-600 rounded-md shadow-sm hover:bg-green-50"
            >
              View Documents
            </a>
          </div>
        </div>
      </div>

      {/* Content inside container */}
      <div className="container flex flex-col items-center px-4 py-16 mx-auto">
        <div className="w-full max-w-4xl mt-16">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Research Overview
            </h2>
            <p className="mb-6 text-gray-700">
              Our research focuses on developing advanced AI systems for
              agricultural applications, improving efficiency, quality, and
              sustainability in farming practices. The project encompasses
              multiple crops and products, utilizing computer vision and machine
              learning to revolutionize quality assessment and disease
              identification.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="p-4 rounded-md bg-green-50">
                <h3 className="mb-2 font-medium text-green-800">
                  Project Duration
                </h3>
                <p className="text-gray-700">June 2024 - June 2025</p>
              </div>
              <div className="p-4 rounded-md bg-green-50">
                <h3 className="mb-2 font-medium text-green-800">
                  Research Team
                </h3>
                <p className="text-gray-700">6 Researchers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
