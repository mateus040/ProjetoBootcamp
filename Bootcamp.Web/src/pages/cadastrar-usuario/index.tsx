import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/main";

export default function CadastrarUsuario() {
  return (
    <Layout>
      <div className="px-12 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-[30px] sm:text-[60px] font-bold mb-10 text-center">
              Vamos começar!
            </p>

            <div className="w-full md:w-[650px] bg-white p-6 rounded-xl text-black">
              <p className="font-semibold text-3xl">Cadastro</p>
              <hr className="mt-4 border-black" />

              <div className="space-y-5 mt-5">
                <p className="font-semibold text-xl">
                  Cadastre-se em nosso sistema para poder continuar
                </p>

                <div className="flex flex-col text-xl">
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Informe seu nome"
                    className="w-100 border-2 border-black p-3 rounded-lg"
                  />

                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="Informe seu telefone"
                    className="w-full mt-5 border-2 border-black p-3 rounded-lg"
                  />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between text-xl">
                  <Link
                    to="/"
                    className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-zinc-800 border-2 border-black hover:border-zinc-800 text-center uppercase font-bold hover:text-white transition-colors duration-150"
                  >
                    Voltar
                  </Link>
                  <Link
                    to="/dificuldade"
                    className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-[#ff0b0b] border-2 border-black hover:border-[#ff0b0b] text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 lg:mt-0"
                  >
                    Continuar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
