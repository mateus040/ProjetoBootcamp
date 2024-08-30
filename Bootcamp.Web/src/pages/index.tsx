import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl sm:text-3xl font-semibold">Seja bem-vindo ao</p>
        <p className="text-[75px] sm:text-[80px] md:text-[90px] lg:text-[120px] uppercase font-bold -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 tracking-tighter">
          MINDQUEST
        </p>

        <Link
          to="/cadastrar-usuario"
          className="w-[280px] lg:w-[400px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-white border-4 text-center uppercase font-bold text-[18px] md:text-[25px]"
        >
          Teste seus conhecimentos
        </Link>

        <Link
          to="/pontuacao"
          className="mt-5 w-[280px] lg:w-[400px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-white border-4 text-center uppercase font-bold text-[18px] md:text-[25px]"
        >
          Ver pontuação
        </Link>
      </div>
    </div>
  );
}
