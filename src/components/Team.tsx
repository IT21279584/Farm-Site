import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Harinda Fernando",
      role: "Supervisor",
      image:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/harindaf-1710311664.jpg",
      bio: "Sri Lanka Institute of Information Technology",
      social: {
        linkedin: "#",
        github: "#",
        email: "jane.smith@example.com",
      },
    },
    {
      name: "Ms. Kaushalya Fernando",
      role: "Co-Supervisor",
      image:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/Photo.jpeg.jpg",
      bio: "Sri Lanka Institute of Information Technology",
      social: {
        linkedin: "#",
        github: "#",
        email: "alex.johnson@example.com",
      },
    },
    {
      name: "Sudusinghe H. J",
      role: "Group Leader",
      image:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/WhatsApp+Image+2025-04-25+at+00.08.50_2547db7e.jpg",
      bio: "Sri Lanka Institute of Information Technology",
      social: {
        linkedin: "#",
        github: "#",
        email: "sophia.chen@example.com",
      },
    },
    {
      name: "De Silva B. A. P",
      role: "Group Member",
      image:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/WhatsApp+Image+2025-04-23+at+15.15.13_f5cbd94e.jpg",
      bio: "Sri Lanka Institute of Information Technology",
      social: {
        linkedin: "#",
        github: "#",
        email: "michael.rodriguez@example.com",
      },
    },
    {
      name: "Abeysinghe I. U",
      role: "Group Member",
      image:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/WhatsApp+Image+2025-04-23+at+08.38.56_a7f3907b.jpg",
      bio: "Sri Lanka Institute of Information Technology",
      social: {
        linkedin: "#",
        github: "#",
        email: "emily.wilson@example.com",
      },
    },
    {
      name: "De Silva G. H. G. T. S",
      role: "Group Member",
      image:
        "https://lecturevideos-online-learning-platform.s3.eu-north-1.amazonaws.com/Photo/WhatsApp+Image+2025-04-24+at+22.10.08_f3cad9d6.jpg",
      bio: "Sri Lanka Institute of Information Technology",
      social: {
        linkedin: "#",
        github: "#",
        email: "david.park@example.com",
      },
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">Research Team</h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
          Our interdisciplinary team combines expertise in artificial intelligence, agricultural science, and software engineering.
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="mb-3 font-medium text-green-600">{member.role}</p>
                <p className="mb-4 text-gray-600">{member.bio}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-500 transition-colors hover:text-blue-600"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="text-gray-500 transition-colors hover:text-gray-800"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-gray-500 transition-colors hover:text-red-500"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;