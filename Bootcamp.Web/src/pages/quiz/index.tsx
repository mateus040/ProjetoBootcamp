import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ModalTempoEsgotado } from "../components/modal-tempo-esgotado";

const TIME = 5;

export default function Quiz() {
  const [time, setTime] = useState<number>(TIME);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setOpenModal(true);
    }
  }, [time]);

  return (
    <div className="py-6 px-8 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="mb-5 flex items-center justify-center text-[50px]">
            <FaRegClock />
            <span className="mx-3">{`00:${
              time < 10 ? `0${time}` : time
            }`}</span>
          </div>
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

              <div className="w-full bg-white hover:bg-zinc-800 py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 hover:text-white">
                Usaria split("") e reverse(), mas esqueceria de usar join("")
                para unir os caracteres de volta.
              </div>
              <div className="w-full bg-white hover:bg-zinc-800 py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 hover:text-white">
                Tentaria usar join("") antes de split(""), o que não faz
                sentido, pois join só funciona em arrays.
              </div>
              <div className="w-full bg-white hover:bg-zinc-800 py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 hover:text-white">
                Usaria slice() para tentar copiar a string antes de reverse() e
                join(), o que não funcionaria corretamente.
              </div>
              <div className="w-full bg-white hover:bg-zinc-800 py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 hover:text-white">
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

      <ModalTempoEsgotado open={openModal} close={() => setOpenModal(false)} />
    </div>
  );
}
