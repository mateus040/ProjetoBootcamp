import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/main";

type Difficulty = "facil" | "medio" | "dificil";

export default function Dificuldade() {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);

  const handleSelectDifficulty = (dificuldade: Difficulty) => {
    setSelectedDifficulty(dificuldade);
  };

  return (
    <Layout>
      <div className="px-12 md:px-0 flex flex-col min-h-screen">
        <div className="container mx-auto flex-grow flex flex-col items-center justify-center">
          <p className="text-[34px] sm:text-[60px] font-bold mb-6 text-center">
            Escolha a dificuldade
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center text-xl md:space-x-5 w-full p-6">
            <button
              onClick={() => handleSelectDifficulty("facil")}
              className={`bg-[#c20000] w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 ${
                selectedDifficulty === "facil"
                  ? "bg-[#ff0b0b] scale-110"
                  : "hover:bg-[#ff0b0b] hover:scale-110 transition duration-300 transition-transform duration-300"
              }`}
            >
              Fácil
            </button>
            <button
              onClick={() => handleSelectDifficulty("medio")}
              className={`bg-[#c20000] w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 mt-3 md:mt-0 ${
                selectedDifficulty === "medio"
                  ? "bg-[#ff0b0b] scale-110"
                  : "hover:bg-[#ff0b0b] hover:scale-110 transition duration-300 transition-transform duration-300"
              }`}
            >
              Médio
            </button>
            <button
              onClick={() => handleSelectDifficulty("dificil")}
              className={`bg-[#c20000] w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 mt-3 md:mt-0 ${
                selectedDifficulty === "dificil"
                  ? "bg-[#ff0b0b] scale-110"
                  : "hover:bg-[#ff0b0b] hover:scale-110 transition duration-300 transition-transform duration-300"
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
    </Layout>
  );
}
