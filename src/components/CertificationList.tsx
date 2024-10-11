import React from 'react';
import { Link } from 'react-router-dom';
import { certifications } from '../data/certifications';
import { Award } from 'lucide-react';

const CertificationList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Certifications</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Award className="mr-2 text-blue-500" />
              {cert.name}
            </h2>
            <p className="text-gray-600 mb-4">{cert.description}</p>
            <Link
              to={`/certification/${cert.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Start Preparation
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationList;