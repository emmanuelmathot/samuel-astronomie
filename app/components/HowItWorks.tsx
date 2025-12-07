
import React from 'react';

interface HowItWorksProps {
  onBack: () => void;
}

const Step: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="text-3xl text-cyan-300 mt-1">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <div>
      <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  </div>
);

const HowItWorks: React.FC<HowItWorksProps> = ({ onBack }) => {
  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Comment fonctionne l'Assistant ?
            </h2>
             <button onClick={onBack} className="text-gray-400 hover:text-white">
                <i className="fa-solid fa-xmark fa-lg"></i>
            </button>
        </div>
        
      <p className="mb-8 text-lg text-gray-200">
        L'assistant AstroBot n'est pas magique ! Nous l'avons construit en suivant quelques étapes logiques, un peu comme une recette de cuisine.
      </p>

      <div className="space-y-6">
        <Step icon="fa-file-alt" title="1. La Documentation de Samuel">
          Tout commence avec le travail de recherche de Samuel. Il a rassemblé toutes les informations importantes dans sa présentation. C'est notre "livre de connaissances".
        </Step>
        <Step icon="fa-brain" title="2. Le Cerveau de l'IA (Gemini)">
          Nous utilisons un modèle d'intelligence artificielle de Google appelé Gemini. On peut le voir comme un cerveau très puissant qui est excellent pour comprendre et générer du langage.
        </Step>
        <Step icon="fa-book-open" title="3. Donner des Instructions">
          Avant de poser une question, nous donnons une instruction très claire à Gemini : "Tu es AstroBot. Tu dois répondre aux questions en utilisant UNIQUEMENT la présentation de Samuel. N'invente rien !". C'est ce qu'on appelle un "prompt système".
        </Step>
        <Step icon="fa-comments" title="4. La Conversation">
          Quand tu poses une question, nous l'envoyons à Gemini AVEC les instructions ET l'intégralité de la présentation de Samuel. Gemini lit tout ça et formule une réponse en se basant uniquement sur les informations fournies.
        </Step>
      </div>

      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
        <p className="font-bold text-white">
        <i className="fa-solid fa-lightbulb mr-2 text-yellow-300"></i>En résumé : l'assistant ne "sait" rien par lui-même. Il est juste très doué pour trouver et reformuler les réponses qui se trouvent déjà dans la présentation !
        </p>
      </div>

       <div className="text-center mt-8">
            <button onClick={onBack} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg">
                Retour
            </button>
       </div>
    </div>
  );
};

export default HowItWorks;
