import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { certifications, Question } from '../data/certifications';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
  const { certId, quizId } = useParams<{ certId: string; quizId: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const certification = certifications.find(cert => cert.id === certId);
    const quiz = certification?.quizzes.find(q => q.id === quizId);
    if (quiz) {
      setQuestions(quiz.questions);
    } else {
      navigate('/');
    }
  }, [certId, quizId, navigate]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          onClick={() => navigate(`/certification/${certId}`)}
        >
          Back to Certification
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Question {currentQuestion + 1} of {questions.length}</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-xl mb-4">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left p-3 rounded-lg ${
                selectedAnswer === index
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              } border transition duration-300`}
              onClick={() => handleAnswerSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;