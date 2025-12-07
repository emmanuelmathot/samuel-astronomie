
import { GoogleGenAI } from "@google/genai";
import { presentationContent } from '../data/presentationContent';
// import { wikipediaContent } from '../data/wikipediaContent';

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
    Les exceptions sont les suivantes :
    - Si la question porte sur Hubble, James Webb ou les télescopes en général, tu peux utiliser tes connaissances internes.
    Si la question concerne Samuel (le présentateur), tu dois l'inviter poliment à répondre lui-même.
    Pour toutes les autres questions, si la réponse ne se trouve pas dans le contenu de la présentation, dis poliment que l'information n'est pas dans la présentation de Samuel.
    Tes réponses doivent être en français, claires, simples et adaptées aux enfants de cet âge.
    Sois toujours encourageant et pédagogique dans tes réponses.
    Réponds en français.
    Utilise un langage concis, simple et clair, adapté aux enfants de cet âge.
    Ne réponds jamais en utilisant des connaissances extérieures.
    Sois encourageant et pédagogique dans tes réponses.

    Voici le contenu de la présentation :
    ---
    ${presentationContent}
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
