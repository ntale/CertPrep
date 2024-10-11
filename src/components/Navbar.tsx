import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, BarChart2, Award, UserPlus, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <BookOpen className="mr-2" />
          CertPrep
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 flex items-center">
            <Home className="mr-1" size={18} />
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-blue-200 flex items-center">
            <BarChart2 className="mr-1" size={18} />
            Dashboard
          </Link>
          <Link to="/certifications" className="hover:text-blue-200 flex items-center">
            <Award className="mr-1" size={18} />
            Certifications
          </Link>
          <Link to="/study-materials" className="hover:text-blue-200 flex items-center">
            <BookOpen className="mr-1" size={18} />
            Study
          </Link>
          <Link to="/register" className="hover:text-blue-200 flex items-center">
            <UserPlus className="mr-1" size={18} />
            Register
          </Link>
          <Link to="/login" className="hover:text-blue-200 flex items-center">
            <LogIn className="mr-1" size={18} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;