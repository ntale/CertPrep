import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Ace Your Software Engineering Certifications</h1>
        <p className="text-xl mb-8">Prepare smarter, not harder, with CertPrep</p>
        <div className="space-x-4">
          <Link
            to="/certifications"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Explore Certifications
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 border border-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Multiple Certifications"
          description="Prepare for various popular software engineering certifications"
        />
        <FeatureCard
          title="Targeted Quizzes"
          description="Practice with quizzes tailored to specific certification topics"
        />
        <FeatureCard
          title="Progress Tracking"
          description="Monitor your improvement across different certifications"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <CheckCircle className="text-green-500 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;