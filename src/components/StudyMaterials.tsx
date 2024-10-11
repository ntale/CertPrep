import React from 'react';
import { BookOpen, FileText, Video } from 'lucide-react';

const studyMaterials = [
  {
    title: "Data Structures and Algorithms",
    type: "book",
    description: "Comprehensive guide to essential data structures and algorithms",
    link: "#"
  },
  {
    title: "System Design Interview",
    type: "video",
    description: "Video course on tackling system design questions",
    link: "#"
  },
  {
    title: "Design Patterns Cheat Sheet",
    type: "document",
    description: "Quick reference for common design patterns",
    link: "#"
  },
  {
    title: "Microservices Architecture",
    type: "book",
    description: "In-depth look at building scalable microservices",
    link: "#"
  },
  {
    title: "SQL Fundamentals",
    type: "video",
    description: "Tutorial series on SQL basics and advanced concepts",
    link: "#"
  }
];

const StudyMaterials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Study Materials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyMaterials.map((material, index) => (
          <MaterialCard key={index} {...material} />
        ))}
      </div>
    </div>
  );
};

const MaterialCard = ({ title, type, description, link }) => {
  const getIcon = () => {
    switch (type) {
      case 'book':
        return <BookOpen className="text-blue-500" />;
      case 'video':
        return <Video className="text-green-500" />;
      case 'document':
        return <FileText className="text-yellow-500" />;
      default:
        return <BookOpen className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        {getIcon()}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-600 hover:text-blue-800 font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Access Material
      </a>
    </div>
  );
};

export default StudyMaterials;