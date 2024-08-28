import { useNavigate } from "react-router-dom";
import EmptyModal from "../../components/empty-modal";

interface Props {
  open: boolean;
  close: () => void;
}

export const ModalTempoEsgotado = ({ open, close }: Props) => {
  const navigate = useNavigate();

  return (
    <EmptyModal isOpen={open} close={close} title="Tempo esgotado!">
      <p className="text-xl text-black">Seu tempo de resposta expirou. Tente novamente!</p>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
        <button
          onClick={close}
          className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-zinc-800 border-2 border-black hover:border-zinc-800 text-center uppercase font-bold hover:text-white transition-colors duration-150 text-black"
        >
          Fechar
        </button>
        <button
          onClick={() => navigate(0)}
          className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-[#ff0b0b] border-2 border-[#ff0b0b] hover:border-[#ff0b0b] text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 lg:mt-0 text-[#ff0b0b]"
        >
          Reiniciar
        </button>
      </div>
    </EmptyModal>
  );
};
