import { Link } from "react-router-dom";

export default function Pontuacao() {
  return (
    <div className="min-h-screen flex flex-col justify-between py-6 px-8">
      <div>
        <p className="text-[52px] font-semibold text-center lg:text-start">
          Pontuação geral
        </p>

        <div className="mt-8 flex flex-col items-center lg:items-start justify-center lg:justify-start">
          <div className="space-y-5">
            <div className="flex items-center text-4xl">
              {/* Nome do usuario */}
              <p>Jogador 1:</p>

              {/* Pontuação do usuário */}
              <p className="ms-5">35</p>
            </div>

            <div className="flex items-center text-4xl">
              {/* Nome do usuario */}
              <p>Jogador 1:</p>

              {/* Pontuação do usuário */}
              <p className="ms-5">35</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-10"
      >
        Voltar
      </Link>
    </div>
  );
}
