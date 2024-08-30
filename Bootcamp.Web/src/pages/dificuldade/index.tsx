import { useState } from "react";
import { Link } from "react-router-dom";

type Difficulty = "facil" | "medio" | "dificil";

export default function Dificuldade() {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);

  const handleSelectDifficulty = (dificuldade: Difficulty) => {
    setSelectedDifficulty(dificuldade);
  };

  return (
    <div className="px-12 md:px-0 flex flex-col min-h-screen">
      <div className="container mx-auto flex-grow flex flex-col items-center justify-center">
        <p className="text-[34px] sm:text-[60px] font-bold mb-6 text-center">
          Escolha a dificuldade
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center text-xl md:space-x-5 w-full p-6">
          <button
            onClick={() => handleSelectDifficulty("facil")}
            className={`w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 ${
              selectedDifficulty === "facil"
                ? "bg-[#5e1414] text-white"
                : "bg-[#ff0b0b] hover:bg-[#b12727] hover:text-white"
            }`}
          >
            Fácil
          </button>
          <button
            onClick={() => handleSelectDifficulty("medio")}
            className={`w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 mt-3 md:mt-0 ${
              selectedDifficulty === "medio"
                ? "bg-[#5e1414] text-white"
                : "bg-[#ff0b0b] hover:bg-[#b12727] hover:text-white"
            }`}
          >
            Médio
          </button>
          <button
            onClick={() => handleSelectDifficulty("dificil")}
            className={`w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 mt-3 md:mt-0 ${
              selectedDifficulty === "dificil"
                ? "bg-[#5e1414] text-white"
                : "bg-[#ff0b0b] hover:bg-[#b12727] hover:text-white"
            }`}
          >
            Difícil
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-6 w-full">
        <Link
          to="/"
          className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150"
        >
          Voltar
        </Link>
        <Link
          to="/quiz"
          className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 md:mt-0"
        >
          Iniciar
        </Link>
      </div>
    </div>
  );
}
