
import { GoogleGenAI } from "@google/genai";
import { presentationContent } from '../data/presentationContent';
import { wikipediaContent } from '../data/wikipediaContent';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development, but the app expects the key to be set in the environment.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const askAssistant = async (question: string): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const systemInstruction = `
    Tu es AstroBot, un assistant amical et savant pour une présentation scolaire sur l'astronomie. Les élèves ont entre 9 et 10 ans.
    Tu dois répondre aux questions des élèves en te basant EXCLUSIVEMENT sur le contenu de la présentation fourni ci-dessous.
    Réponds en français.
    Si la réponse ne se trouve pas dans le texte, dis poliment que l'information n'est pas dans la présentation de Samuel.
    Si la question est hors sujet mais concerne Samuel, invite Samuel à répondre lui-même.
    Utilise un langage concis, simple et clair, adapté aux enfants de cet âge.
    Ne réponds jamais en utilisant des connaissances extérieures.
    Sois encourageant et pédagogique dans tes réponses.

    Voici le contenu de la présentation :
    ---
    ${presentationContent}
    ${wikipediaContent}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Désolé, une erreur s'est produite. Je ne peux pas répondre pour le moment.";
  }
};
