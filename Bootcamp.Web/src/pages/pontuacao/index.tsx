import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/main";
import { useEffect, useState } from "react";
import ScoresModel from "../../interfaces/Models/ScoresModel";
import axios from "axios";
import apiErrorHandler from "../../services/api-error-handler";

export default function Pontuacao() {
  const [loading, setLoading] = useState<boolean>(false);

  const [points, setPoints] = useState<ScoresModel[]>([]);

  const fetchPoints = () => {
    setLoading(true);

    axios
      .get("http://localhost:8000/api/accounts/scores/")
      .then((response) => {
        setPoints(response.data);
      })
      .catch(apiErrorHandler)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-between py-6 px-8">
        <div>
          <p className="text-[52px] font-semibold text-center lg:text-start">
            Pontuação geral
          </p>

          {loading && <p className="text-lg">Carregando...</p>}

          {!loading && (
            <div className="mt-8 flex flex-col items-center lg:items-start justify-center lg:justify-start">
              <div className="space-y-5">
                {points.map((point, _) => (
                  <div className="flex items-center text-4xl" key={point.id}>
                    {/* Nome do usuario */}
                    <p>{point.nome}:</p>

                    {/* Pontuação do usuário */}
                    <p className="ms-5">{point.pontuacao}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && points.length === 0 && (
            <p className="text-lg">Nenhuma pontuação encontrada.</p>
          )}
        </div>

        <Link
          to="/"
          className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-10"
        >
          Voltar
        </Link>
      </div>
    </Layout>
  );
}
