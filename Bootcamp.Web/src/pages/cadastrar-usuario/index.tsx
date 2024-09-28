import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/main";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import LayoutAutenticacao from "../../components/layout/autenticacao";
import apiErrorHandler from "../../services/api-error-handler";

interface UserFormData {
  nome: string;
  telefone: string;
}

export default function CadastrarUsuario() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    setLoading(true);

    let args: UserFormData = {
      nome: data.nome,
      telefone: data.telefone,
    };

    axios
      .post("http://localhost:8000/api/accounts/register/", args)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        navigate("/login");
      })
      .catch(apiErrorHandler)
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <LayoutAutenticacao>
        <p className="font-semibold text-3xl">Cadastro</p>
        <hr className="mt-4 border-black" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
          <p className="font-semibold text-xl">
            Cadastre-se em nosso sistema para poder continuar
          </p>

          <div className="flex flex-col text-xl">
            <input
              type="text"
              id="nome"
              placeholder="Informe seu nome"
              className="w-100 border-2 border-black p-3 rounded-lg"
              {...register("nome", {
                required: "O campo nome é obrigatório",
              })}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}

            <input
              type="text"
              id="telefone"
              placeholder="Informe seu telefone"
              className="w-full mt-5 border-2 border-black p-3 rounded-lg"
              {...register("telefone", {
                required: "O campo telefone é obrigatório",
              })}
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm">{errors.telefone.message}</p>
            )}
          </div>

          <p className="mt-3 text-lg">
            Já tem uma conta?{" "}
            <Link to="/login" className="underline font-bold">
              Entrar
            </Link>
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between text-xl">
            <Link
              to="/"
              className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-zinc-800 border-2 border-black hover:border-zinc-800 text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 lg:mt-0 order-2 lg:order-1"
            >
              Voltar
            </Link>
            <button
              className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-[#ff0b0b] border-2 border-black hover:border-[#ff0b0b] text-center uppercase font-bold hover:text-white transition-colors duration-150 order-1 lg:order-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Acessando..." : "Acessar"}
            </button>
          </div>
        </form>
      </LayoutAutenticacao>
    </Layout>
  );
}
