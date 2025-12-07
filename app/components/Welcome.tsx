
import React from 'react';
import type { AppView } from '../App';

interface WelcomeProps {
  setView: (view: AppView) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ setView }) => {
  return (
    <div className="bg-black/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        L'Astronomie et ses Instruments
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">Une présentation par Samuel</p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => setView('quiz')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-star"></i>
          Commencer le Quizz
        </button>
        <button 
          onClick={() => setView('chatbot')}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-robot"></i>
          Parler à l'Assistant
        </button>
        <button 
          onClick={() => setView('howitworks')}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-gears"></i>
          Comment ça marche ?
        </button>
      </div>
    </div>
  );
};

export default Welcome;
