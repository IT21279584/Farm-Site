import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

const Documents = () => {
  const [selectedCategory, setSelectedCategory] = useState('documents');
  
  const categories = [
    { id: 'documents', name: 'Documents' },
    { id: 'presentations', name: 'Presentations' }
  ];

  const documents = [
    {
      id: 1,
      title: "Topic Assessment",
      category: "documents",
      date: "2nd June 2024",
      status: "Group",
      downloadLink:
        "https://drive.google.com/file/d/1nHq_fmipoVQCld3HIHqW5OSwz6MIsPBa/view?usp=sharing",
    },
    {
      id: 3,
      title: "Project Proposal",
      category: "documents",
      date: "24th July 2024",
      status: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1Nr1afibUc7uFZJa7xx8TmIgq-csZgzgL?usp=sharing",
    },
    {
      id: 5,
      title: "Final Report",
      date: "28th March 2025",
      category: "documents",
      status: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1PozUz_hH0_R8ic2rATnMghBdSP_CeTab?usp=sharing",
    },
    {
      id: 6,
      title: "Final Reports",
      category: "documents",
      date: "28th March 2025",

      status: "Individual",
      downloadLink:
        "https://drive.google.com/drive/folders/1SPq80oo8d-QpbVAypkgTA8dk0Z2fnzR0?usp=sharing",
    },
    // Presentations
    {
      id: 7,
      title: "Project Proposal Presentation",
      category: "presentations",
      date: "14th August 2024",

      status: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1hoirBed5tNCrCvHi5BqFVG7n6K5-C1Iy?usp=drive_link",
    },
    {
      id: 8,
      title: "Progress Presentation I",
      category: "presentations",
      date: "4th December 2024",

      status: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1ZtK3zDRZSvDS2209KWIE5leDcTwHPWWD?usp=drive_link",
    },
    {
      id: 9,
      title: "Progress Presentation II",
      category: "presentations",
      date: "19th March 2025",

      status: "Group",
      downloadLink:
        "https://docs.google.com/presentation/d/1520X_7Q_6Xnz2OEflFgCtfeA7fXNz6TD/edit?usp=sharing&ouid=115972985275173855753&rtpof=true&sd=true",
    },
    {
      id: 10,
      title: "Final Presentation",
      category: "presentations",
      date: "26th May 2025",

      status: "Group",
      downloadLink:
        "https://docs.google.com/presentation/d/1520X_7Q_6Xnz2OEflFgCtfeA7fXNz6TD/edit?usp=sharing&ouid=115972985275173855753&rtpof=true&sd=true",
    },
  ];

  const filteredDocuments = documents.filter(doc => doc.category === selectedCategory);

  return (
    <section id="documents" className="py-16 bg-green-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">Downloads</h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
          Please find all project-related files below.
        </p>
        
        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-md transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Documents Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredDocuments.map((document) => (
            <div 
              key={document.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    document.status === 'Submitted' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {document.status}
                  </span>
                </div>
                
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{document.title}</h3>
                
                <div className="mb-4 space-y-2">
                  {document.date && (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Submitted on:</span> {document.date}
                    </p>
                  )}
                  {!document.date && (
                    <p className="text-sm text-gray-600">
                      Yet to be submitted, link will be updated soon.
                    </p>
                  )}
                 
                 
                </div>
                
                {document.downloadLink && (
                  <a 
                    href={document.downloadLink}
                    className="inline-flex items-center font-medium text-green-600 transition-colors hover:text-green-700"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;