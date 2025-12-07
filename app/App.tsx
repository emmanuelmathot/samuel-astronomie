
import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Chatbot from './components/Chatbot';
import HowItWorks from './components/HowItWorks';

export type AppView = 'welcome' | 'quiz' | 'chatbot' | 'howitworks';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('welcome');

  const renderContent = () => {
    switch (currentView) {
      case 'quiz':
        return <Quiz onBack={() => setCurrentView('welcome')} />;
      case 'chatbot':
        return <Chatbot onBack={() => setCurrentView('welcome')} />;
      case 'howitworks':
        return <HowItWorks onBack={() => setCurrentView('welcome')} />;
      case 'welcome':
      default:
        return <Welcome setView={setCurrentView} />;
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-fixed text-white font-sans flex items-center justify-center p-4" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920')" }}
    >
      <div className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
