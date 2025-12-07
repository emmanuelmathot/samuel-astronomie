
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { askAssistant } from '../services/geminiService';

interface ChatbotProps {
  onBack: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: "Bonjour ! Je suis AstroBot, l'assistant de Samuel. Pose-moi une question sur sa présentation !" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botResponseText = await askAssistant(input);
    const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-2xl mx-auto flex flex-col h-[80vh] md:h-[70vh]">
        <div className="p-4 border-b border-white/20 flex justify-between items-center">
            <h2 className="text-xl font-bold text-purple-300">Assistant AstroBot</h2>
            <button onClick={onBack} className="text-gray-400 hover:text-white">
                <i className="fa-solid fa-xmark fa-lg"></i>
            </button>
        </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
              <p className="text-white">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start my-2">
                <div className="bg-gray-700 rounded-2xl rounded-bl-none p-3 inline-flex items-center gap-2">
                    <span className="animate-pulse">.</span>
                    <span className="animate-pulse delay-150">.</span>
                    <span className="animate-pulse delay-300">.</span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-white/20">
        <div className="flex items-center bg-gray-800/50 rounded-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pose ta question ici..."
            className="w-full bg-transparent p-3 focus:outline-none"
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="p-3 text-purple-400 hover:text-purple-300 disabled:text-gray-500">
            <i className="fa-solid fa-paper-plane fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
