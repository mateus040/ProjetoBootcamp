import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/main";
import { Difficulty } from "../../enums/dificuldade";

export default function Dificuldade() {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);
  const navigate = useNavigate();

  const handleSelectDifficulty = (dificuldade: Difficulty) => {
    setSelectedDifficulty(dificuldade);
  };

  const handleStartQuiz = () => {
    if (selectedDifficulty) {
      navigate(`/quiz?difficulty=${selectedDifficulty}`);
    }
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
              onClick={() => handleSelectDifficulty(Difficulty.FACIL)}
              className={`bg-[#c20000] w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 ${
                selectedDifficulty === Difficulty.FACIL
                  ? "bg-[#ff0b0b] scale-110"
                  : "hover:bg-[#ff0b0b] hover:scale-110 duration-300 transition-transform"
              }`}
            >
              Fácil
            </button>
            <button
              onClick={() => handleSelectDifficulty(Difficulty.MEDIO)}
              className={`bg-[#c20000] w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 mt-3 md:mt-0 ${
                selectedDifficulty === Difficulty.MEDIO
                  ? "bg-[#ff0b0b] scale-110"
                  : "hover:bg-[#ff0b0b] hover:scale-110 transition-transform duration-300"
              }`}
            >
              Médio
            </button>
            <button
              onClick={() => handleSelectDifficulty(Difficulty.DIFICIL)}
              className={`bg-[#c20000] w-full lg:w-[250px] py-2 rounded-lg border-white border-4 text-center uppercase font-bold transition-colors duration-150 mt-3 md:mt-0 ${
                selectedDifficulty === Difficulty.DIFICIL
                  ? "bg-[#ff0b0b] scale-110"
                  : "hover:bg-[#ff0b0b] hover:scale-110 transition-transform duration-300"
              }`}
            >
              Difícil
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between p-6 w-full">
          <Link
            to="/"
            className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 lg:mt-0 order-2 lg:order-1"
          >
            Voltar
          </Link>
          <button
            onClick={handleStartQuiz} // Adicionando a ação de iniciar o quiz
            className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150 order-1 lg:order-2"
          >
            Iniciar
          </button>
        </div>
      </div>
    </Layout>
  );
}
