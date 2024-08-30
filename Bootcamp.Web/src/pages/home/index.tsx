import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/main";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-2xl sm:text-3xl font-semibold text-shadow-white">
            Seja bem-vindo ao
          </p>
          <p className="text-[75px] sm:text-[80px] md:text-[90px] lg:text-[120px] uppercase font-bold -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 tracking-tighter blend_shadow amsterdam-font">
            MINDQUEST
          </p>

          <Link
            to="/cadastrar-usuario"
            className="w-[280px] lg:w-[400px] py-2 rounded-lg bg-[#dd0c0c] hover:bg-[#ff0b0b] hover:scale-110 transition duration-300 border-white border-4 text-center uppercase font-bold text-[18px] md:text-[25px]"
          >
            Teste seus conhecimentos
          </Link>

          <Link
            to="/pontuacao"
            className="mt-5 w-[280px] lg:w-[400px] py-2 rounded-lg bg-[#dd0c0c] hover:bg-[#ff0b0b] hover:scale-110 transition duration-300 border-white border-4 text-center uppercase font-bold text-[18px] md:text-[25px]"
          >
            Ver pontuação
          </Link>
        </div>
      </div>
    </Layout>
  );
}
