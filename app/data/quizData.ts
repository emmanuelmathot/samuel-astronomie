
import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Quelle est la principale différence entre une lunette astronomique et un télescope ?",
    options: [
      "La lunette utilise des miroirs et le télescope des lentilles",
      "La lunette utilise des lentilles et le télescope des miroirs",
      "Il n'y a pas de différence",
      "La lunette est plus puissante que le télescope",
    ],
    correctAnswer: "La lunette utilise des lentilles et le télescope des miroirs",
    explanation: "C'est exact ! Les lunettes réfractent la lumière avec des lentilles, tandis que les télescopes la réfléchissent avec des miroirs.",
  },
  {
    question: "Qui a inventé le télescope à miroir en 1668 ?",
    options: [
      "Galilée",
      "Copernic",
      "Newton",
      "Kepler",
    ],
    correctAnswer: "Newton",
    explanation: "Bravo ! C'est Isaac Newton qui a eu l'idée d'utiliser un miroir pour collecter la lumière, ce qui a permis de construire des télescopes plus grands et de meilleure qualité.",
  },
  {
    question: "Pourquoi les grands observatoires sont-ils souvent construits dans des déserts ?",
    options: [
      "Pour être loin des villes",
      "Parce qu'il y fait chaud",
      "Pour le ciel clair, sec et avec peu de pollution lumineuse",
      "Parce que le terrain est plat",
    ],
    correctAnswer: "Pour le ciel clair, sec et avec peu de pollution lumineuse",
    explanation: "Excellente réponse ! Les déserts en altitude, comme l'Atacama au Chili, offrent des conditions parfaites pour observer les étoiles sans être gêné par les nuages ou les lumières de la ville.",
  },
  {
    question: "Quelle est l'une des découvertes majeures du télescope spatial Hubble ?",
    options: [
      "La découverte de Pluton",
      "La confirmation que la Terre est plate",
      "La détermination de l'âge de l'univers (13,8 milliards d'années)",
      "La première photo de la Lune",
    ],
    correctAnswer: "La détermination de l'âge de l'univers (13,8 milliards d'années)",
    explanation: "C'est tout à fait ça ! Grâce à ses observations de galaxies lointaines, Hubble a permis aux scientifiques de calculer l'âge de notre univers avec une grande précision.",
  },
  {
    question: "Quelle est la particularité principale du télescope James Webb par rapport à Hubble ?",
    options: [
      "Il est plus petit que Hubble",
      "Il observe principalement en lumière infrarouge",
      "Il est en orbite autour de la Lune",
      "Il a été lancé avant Hubble",
    ],
    correctAnswer: "Il observe principalement en lumière infrarouge",
    explanation: "Parfait ! Le James Webb est conçu pour voir l'univers en infrarouge. Cela lui permet de voir à travers les nuages de poussière et d'observer les toutes premières galaxies formées après le Big Bang.",
  },
    {
    question: "Quelle est la taille du miroir principal du télescope James Webb ?",
    options: [
      "2,4 mètres",
      "4,2 mètres",
      "6,5 mètres",
      "8,2 mètres",
    ],
    correctAnswer: "6,5 mètres",
    explanation: "Impressionnant ! Le miroir de 6,5 mètres du JWST est beaucoup plus grand que celui de Hubble (2,4 mètres), ce qui lui permet de collecter bien plus de lumière et de voir des objets encore plus lointains et faibles.",
  },
];
