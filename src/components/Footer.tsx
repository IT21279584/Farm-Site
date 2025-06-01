import React from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Agricultural AI Research</h3>
            <p className="text-gray-300 mb-4">
              Advancing agriculture through intelligent diagnostics and quality assessment systems 
              for improved crop health and food safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#scope" className="text-gray-300 hover:text-white transition-colors">Project Scope</a>
              </li>
              <li>
                <a href="#milestones" className="text-gray-300 hover:text-white transition-colors">Milestones</a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-300 hover:text-white transition-colors">Technologies</a>
              </li>
              <li>
                <a href="#documents" className="text-gray-300 hover:text-white transition-colors">Documents</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-green-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Department of Software Engineering<br />
                  Sri Lanka Institute of Information Technology<br />
                  Malabe, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-green-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-green-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">research@agriculturalair.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Agricultural AI Research Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
