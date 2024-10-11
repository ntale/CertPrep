import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, BookOpen, CheckCircle, Award, FileQuestion } from 'lucide-react';
import { certifications } from '../data/certifications';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Quizzes Completed" value={15} icon={<CheckCircle />} />
        <StatCard title="Study Hours" value={32} icon={<BookOpen />} />
        <StatCard title="Overall Progress" value="65%" icon={<BarChart />} />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ActivityItem
            title="Completed Java Fundamentals Quiz"
            date="2 hours ago"
            score="85%"
          />
          <ActivityItem
            title="Studied Design Patterns"
            date="Yesterday"
            duration="2 hours"
          />
          <ActivityItem
            title="Completed System Design Quiz"
            date="3 days ago"
            score="92%"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Explore Certifications and Quizzes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Award className="mr-2 text-blue-500" />
                {cert.name}
              </h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <Link
                to={`/certification/${cert.id}`}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                <FileQuestion className="mr-1" size={18} />
                View Quizzes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="text-blue-500 mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ActivityItem = ({ title, date, score, duration }) => (
  <div className="border-b last:border-b-0 py-4">
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm text-gray-600">
      {date} • {score || duration}
    </p>
  </div>
);

export default Dashboard;