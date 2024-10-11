import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certifications } from '../data/certifications';
import { FileQuestion } from 'lucide-react';

const CertificationDetail = () => {
  const { certId } = useParams<{ certId: string }>();
  const certification = certifications.find(cert => cert.id === certId);

  if (!certification) {
    return <div>Certification not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{certification.name}</h1>
      <p className="text-xl mb-8">{certification.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Available Quizzes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certification.quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <FileQuestion className="mr-2 text-blue-500" />
              {quiz.title}
            </h3>
            <Link
              to={`/quiz/${certId}/${quiz.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-block mt-4"
            >
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationDetail;