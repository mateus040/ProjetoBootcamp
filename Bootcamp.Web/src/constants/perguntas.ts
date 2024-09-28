import { Difficulty } from "../enums/dificuldade";

type Question = {
  question: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
  difficulty: Difficulty;
};

export const questions: Question[] = [
  // Pergunta Dificuldade Fácil
  {
    question: "O que significa HTML?",
    answers: [
      { text: "HyperText Markup Language", isCorrect: true },
      { text: "Home Tool Markup Language", isCorrect: false },
      { text: "HyperLinks and Text Markup Language", isCorrect: false },
      { text: "HyperTransfer Markup Language", isCorrect: false },
    ],
    difficulty: Difficulty.FACIL,
  },
  {
    question: "O que significa CSS?",
    answers: [
      { text: "Cascading Style Sheets", isCorrect: true },
      { text: "Color Style Sheets", isCorrect: false },
      { text: "Computer Style Sheets", isCorrect: false },
      { text: "Creative Style Sheets", isCorrect: false },
    ],
    difficulty: Difficulty.FACIL,
  },

  // Pergunta Dificuldade Média
  {
    question: "Qual das seguintes não é uma linguagem de programação?",
    answers: [
      { text: "JavaScript", isCorrect: false },
      { text: "HTML", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "Java", isCorrect: false },
    ],
    difficulty: Difficulty.MEDIO,
  },
  {
    question: "O que é o React?",
    answers: [
      {
        text: "Uma biblioteca JavaScript para construir interfaces de usuário",
        isCorrect: true,
      },
      { text: "Uma linguagem de programação", isCorrect: false },
      { text: "Um compilador JavaScript", isCorrect: false },
      { text: "Uma ferramenta de servidor", isCorrect: false },
    ],
    difficulty: Difficulty.MEDIO,
  },

  // Pergunta Dificuldade Difícil
  {
    question:
      "Como você implementaria uma função para inverter uma string em JavaScript?",
    answers: [
      {
        text: 'Usaria split("") e reverse(), mas esqueceria de usar join("") para unir os caracteres de volta.',
        isCorrect: false,
      },
      {
        text: 'Tentaria usar join("") antes de split(""), o que não faz sentido, pois join só funciona em arrays.',
        isCorrect: false,
      },
      {
        text: "Usaria slice() para tentar copiar a string antes de reverse() e join(), o que não funcionaria corretamente.",
        isCorrect: false,
      },
      {
        text: 'Usaria split("") para transformar a string em um array de caracteres, depois reverse() para inverter o array, e join("") para transformá-lo de volta em uma string.',
        isCorrect: true,
      },
    ],
    difficulty: Difficulty.DIFICIL,
  },
  {
    question: "O que é o TypeScript?",
    answers: [
      {
        text: "Um superconjunto de JavaScript que adiciona tipagem estática",
        isCorrect: true,
      },
      { text: "Um compilador JavaScript", isCorrect: false },
      {
        text: "Uma linguagem de programação separada de JavaScript",
        isCorrect: false,
      },
      { text: "Uma biblioteca para estilizar interfaces", isCorrect: false },
    ],
    difficulty: Difficulty.DIFICIL,
  },
];
