
import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';

interface QuizProps {
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= quizQuestions.length;

  const handleAnswerClick = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const getButtonClass = (option: string) => {
    if (!showExplanation) {
      return 'bg-blue-800/50 hover:bg-blue-700/70';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-600';
    }
    if (option === selectedAnswer) {
      return 'bg-red-600';
    }
    return 'bg-gray-700/50 cursor-not-allowed';
  };

  if (isFinished) {
    return (
      <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Quizz Terminé !</h2>
        <p className="text-xl mb-6">Votre score est de {score} sur {quizQuestions.length}</p>
        <div className="flex gap-4 justify-center">
            <button onClick={handleRestart} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                Recommencer
            </button>
            <button onClick={onBack} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg">
                Retour au menu
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-cyan-300">Question {currentQuestionIndex + 1}/{quizQuestions.length}</h2>
            <button onClick={onBack} className="text-gray-400 hover:text-white">
                <i className="fa-solid fa-xmark fa-lg"></i>
            </button>
        </div>

      <p className="text-lg md:text-xl font-semibold mb-6">{currentQuestion.question}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={showExplanation}
            className={`p-4 rounded-lg text-left transition-all duration-300 ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mt-6 p-4 bg-gray-800/70 rounded-lg animate-fade-in">
          <p className="font-bold text-lg mb-2">{selectedAnswer === currentQuestion.correctAnswer ? "Correct !" : "Incorrect."}</p>
          <p>{currentQuestion.explanation}</p>
          <button onClick={handleNextQuestion} className="mt-4 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg w-full">
            Question suivante
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
