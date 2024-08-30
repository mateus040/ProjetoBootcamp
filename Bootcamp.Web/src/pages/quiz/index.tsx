import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ModalTempoEsgotado } from "../components/modal-tempo-esgotado";
import { Layout } from "../../components/layout/main";

type Answer = "a" | "b" | "c" | "d";

const TIME = 20;

export default function Quiz() {
  const [time, setTime] = useState<number>(TIME);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setOpenModal(true);
    }
  }, [time]);

  return (
    <Layout>
      <div className="py-6 px-8 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-screen">
            {time > 0 ? (
              <div className="mb-5 flex items-center justify-center text-[50px]">
                <FaRegClock />
                <span className="mx-3">{`00:${
                  time < 10 ? `0${time}` : time
                }`}</span>
              </div>
            ) : (
              <div className="mb-5 flex items-center justify-center">
                <button
                  onClick={() => setTime(TIME)}
                  className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150"
                >
                  Reiniciar
                </button>
              </div>
            )}

            <div className="w-full md:w-[650px] bg-white p-6 rounded-xl text-black">
              <div className="flex items-center justify-between font-semibold text-3xl">
                <p>Quiz Unisagrado</p>
                {/* Quantidade de perguntas */}
                <p>1/4</p>
              </div>

              <hr className="mt-4 border-black" />

              <div className="space-y-5 mt-5 text-xl">
                <p className="font-semibold">
                  Como você implementaria uma função para inverter uma string em
                  JavaScript?
                </p>

                <div
                  onClick={() => handleAnswerClick("a")}
                  className={`w-full bg-white py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 ${
                    selectedAnswer === "a"
                      ? "bg-zinc-800 text-white"
                      : "hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  Usaria split("") e reverse(), mas esqueceria de usar join("")
                  para unir os caracteres de volta.
                </div>
                <div
                  onClick={() => handleAnswerClick("b")}
                  className={`w-full bg-white py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 ${
                    selectedAnswer === "b"
                      ? "bg-zinc-800 text-white"
                      : "hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  Tentaria usar join("") antes de split(""), o que não faz
                  sentido, pois join só funciona em arrays.
                </div>
                <div
                  onClick={() => handleAnswerClick("c")}
                  className={`w-full bg-white py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 ${
                    selectedAnswer === "c"
                      ? "bg-zinc-800 text-white"
                      : "hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  Usaria slice() para tentar copiar a string antes de reverse()
                  e join(), o que não funcionaria corretamente.
                </div>
                <div
                  onClick={() => handleAnswerClick("d")}
                  className={`w-full bg-white py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 ${
                    selectedAnswer === "d"
                      ? "bg-zinc-800 text-white"
                      : "hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  Usaria split("") para transformar a string em um array de
                  caracteres, depois reverse() para inverter o array, e join("")
                  para transformá-lo de volta em uma string.
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between mt-4 text-xl">
                <Link
                  to="/"
                  className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-zinc-800 border-2 border-black hover:border-zinc-800 text-center uppercase font-bold hover:text-white transition-colors duration-150"
                >
                  Voltar
                </Link>
                <button className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-[#ff0b0b] border-2 border-black hover:border-[#ff0b0b] text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 lg:mt-0">
                  Verificar
                </button>
              </div>
            </div>
          </div>
        </div>

        <ModalTempoEsgotado
          open={openModal}
          close={() => setOpenModal(false)}
        />
      </div>
    </Layout>
  );
}
